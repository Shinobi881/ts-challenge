const http = require('http');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./datastore.js');

const app = express();

const production = process.env.NODE_ENV === 'production'

app.set('port', process.env.PORT || 3333);
app.use(express.static('public'));
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(cors());

/* **************************************************************************
 * WEBPACK HMR
 * *************************************************************************/

if (!production) {
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('../webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
}


/* **************************************************************************
 * API
 * *************************************************************************/


app.get('/reports', (req, res) => {
  res.send(db.fetchAll());
});

app.get('/reports/:id', (req, res) => {
  res.send(db.fetch(req.params.id));
});

app.post('/reports', (req, res) => {
  res.send(db.save(req.body));
});

app.put('/reports/:id', (req, res) => {
  res.send(db.update(req.params.id, req.body));
});

app.delete('/reports/:id', (req, res) => {
  res.send(db.remove(req.params.id));
});



// 404
app.use((req, res, next) => {
  res.status(404).send({
    message: `Yay! The API is running but there is nothing at ${req.url}`,
  });
});

// 5xx
app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Server Error. Check our console logs.' });
});

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Server listening at localhost:${app.get('port')}...`);
});
