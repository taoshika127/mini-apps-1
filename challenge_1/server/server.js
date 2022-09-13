const express = require('express');
const app = express();
const path = require('path');
const { handleInitialData, handleGetRequest, handlePostRequest, handleSearchRequest } = require('./requestHandler.js');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.get('/data', handleInitialData);

app.get('/home', handleGetRequest);

app.post('/', handlePostRequest);

app.post('/search', handleSearchRequest);

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

