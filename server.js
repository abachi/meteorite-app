
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('/test', (req, res) =>{
  res.send({name: 'nasser abachi'});
});

app.listen(3000, () => {
  console.log('listening on 3000 ...');
});