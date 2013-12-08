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
        res.send('ok');
    });

    
};
