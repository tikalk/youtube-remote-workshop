/*
 * player
 * https://github.com//player
 *
 * Copyright (c) 2013 
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (app, server) {

    //Player REST commands
    app.post('/player/:action/:playerId', function (req, res) {
        console.log('sending ' + req.params.action + ' command to ' + req.params.playerId);
        var userSocket = socketUsers[req.params.playerId];
        if(!userSocket){
            return res.send('Player disconnected');
        }
        userSocket.emit(req.params.action, {videoId:req.query.videoId});
        res.send('ok');
    });

    var io = require('socket.io').listen(server);
    var socketUsers = {}

    io.sockets.on('connection', function (socket) {
        var key = parseInt(Math.random() * 9000 + 1000);
        console.log('Connecting key: ' + key);

        socket.emit('localKey', key);

        socketUsers[key] = socket;

        socket.on('disconnect', function () {
            delete socketUsers[key];
        });
    });

};
