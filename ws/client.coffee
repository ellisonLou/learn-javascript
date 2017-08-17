const WebSocket = require('ws');
ws = new WebSocket("ws://localhost:8081")

class ClientLog

  constructor: ->
    @ws = null
    @tmpLog = []

  transferLog: (log) ->
    if not @ws
      @ws = new WebSocket("ws://localhost:3623")
    if @ws?.readyState isnt WebSocket.OPEN
      # 1. 首次transfer data
      @tmpLog.push(log)
    else
      @ws.send(log)
