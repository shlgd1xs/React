var webpack = require('webpack');
var express = require('express');
var path = require('path');
var config = require('./webpack/webpack')("develop");
var bodyParser = require('body-parser');
var app = new (require('express'))();
var port = process.env.PORT || 8080;
var router = express.Router();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('',express.static(path.join(__dirname, '')));
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/server/js/index.html')
});

app.use('/api', router);

var compiler = webpack(config)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
   publicPath: config.output.publicPath,
   noInfo: true,
   stats: { colors: true },
   poll: true,
   quiet: false,
   reload: true,
   hot:true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
   reload: true,
   //log: console.log,
   path: '/__webpack_hmr'
});

app.use(devMiddleware);
app.use(hotMiddleware);

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
})
