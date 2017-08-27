esMultiServerInfo = require '../es/esMultiServerInfo'
WebSocket = require('ws')
multiFactory = require "./multiFactory"
Promise = require 'bluebird'
utils = require '../api/common/utils'

class PoliceSubLog

  constructor: ->
    @ws = null
    @connect_status = "not connected"
    @sendList = []

  addSendTask: (log) ->
    @enqueue(log)

  enqueue: (obj) ->
    @sendList.push(obj)

  dequeue: ->
    @sendList.pop()

  transferSubLog: (branchLog) ->
    esMultiServerInfo.getSupServerInfo()
    .then (superInfo) ->
      if superInfo.superior_ip is ''
        return Promise.reject('no super ip found')

      options =
        headers:
          uuid: superInfo.baseInfo.server_id
      if not @ws
        @ws = new WebSocket("ws://#{superInfo.superior_ip}:3623", options)
        @connect_status = 'connected'

      if @ws?.readyState isnt WebSocket.OPEN
        setTimeout () => # 10秒之后
          try
            utils.BELoggerHandler.writeLog('info', "police system: start send data to super server", {filePath: __filename})
            @ws.send(branchLog)
          catch error
            utils.BELoggerHandler.writeLog('error', "police system: ws error: #{error}", {filePath: __filename})
            @ws.close()
            @connect_status = 'not connected'
            @ws = null
        , 10000
      else
        try
          @ws.send(branchLog)
        catch error
          utils.BELoggerHandler.writeLog('error', "police system: ws error: #{error}", {filePath: __filename})
          @connect_status = 'not connected'
          @ws.close()

      @ws.on 'error', (err) ->
        utils.BELoggerHandler.writeLog('error', "police system: ws error: #{err}", {filePath: __filename})

      @ws.on "message", (mess) =>
        if mess.info is 'close sub ws'
          @ws.close()
          @connect_status = "close from sub"
          utils.BELoggerHandler.writeLog('info', "police system: close ws signal from super", {filePath: __filename})
    .catch (err) =>
      utils.BELoggerHandler.writeLog('error', "police system: ws error: #{err}", {filePath: __filename})
      @ws?.close()
      @connect_status = 'not connected'

  setInterval () =>
    if @connect_status is 'not connected'
      esMultiServerInfo.getSupServerInfo()
      .then (superInfo) =>
        if superInfo.superior_ip is ''
          return Promise.reject('we have no superior_ip!!')
        options =
          headers:
            uuid: superInfo.baseInfo.server_id
        @ws = new WebSocket("ws://#{superInfo.superior_ip}:3623", options)
        @connect_status = 'connected'
  , 90 * 1000


module.exports = new PoliceSubLog()