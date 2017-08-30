const WebSocket = require('ws');
ws = new WebSocket("ws://localhost:8081")

class ClientLog

  constructor: ->
    @ws = null
    @sendStack = []
    init()
  
  init: ->
    if !@ws
    console.log 'init sendlist'

  getSwitchStatusFromSuper: () ->
    # 用来获取上级开关的状态，只能有两级中控使用
    

  send: (log, callback) ->
    @ws.send(log, callback)

  sendWithRetry: (log) ->
    @send log, ->
      @sendStack.push log


  transferLog: (log) ->
    if not @ws
      @ws = new WebSocket("ws://localhost:3623")
    if @ws?.readyState isnt WebSocket.OPEN
      # 1. 首次transfer data
      @sendStack.push(log)
    else
      @sendWithRetry(log)
  
