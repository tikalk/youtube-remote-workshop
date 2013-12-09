var config = {
    apiKey:process.env.API_KEY
};

var youtube = require('../services/youtube/lib/youtube')(config);

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.search = function(req, res){
    var q = req.params.q;
    console.log('Query: '+q);
    youtube.search(q, function(err, result){
        if (err) {
            console.log(err);
            return res.send(null);
        }
        res.send(result);
    });
};
