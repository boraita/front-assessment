const http = require('http');
const countriesCyCapCity = require('./country-by-capital-city');

const app = require('express')();

const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/country/city', (req, res) => {
  res.send(countriesCyCapCity);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});