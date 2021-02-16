const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production'; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const db = require('./DB');
const budget = require('./DB/controllers/budget');

nextApp.prepare().then(() => {
  // express code here
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/budget', (req, res) => {
    budget.saveBudget(req.body)
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        res.status(400).end();
      });
  });

  app.get('/api/budget', (req, res) => {
    budget.findAll()
      .then(resp => {
        res.send(resp);
      })
      .catch(err => {
        console.log(err);
        res.status(404).end();
      });
  });

  app.get('*', (req, res) => {
    return handle(req, res); // for all the react stuff
  });

  app.listen(PORT, err => {
    if (err) { throw err; }
    console.log(`ready at http://localhost:${PORT}`);
  });
});