const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Authorization, Lang');
  next();
});

app.get('/getprices', (req, res) => {
  request(
    { url: 'https://api.integrator.io/v1/apis/601383a129da7d0877bc4eb2/request' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
