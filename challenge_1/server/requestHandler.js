const { saveOne, saveInit, readAll, search } = require('../db/database.js');

module.exports = {
  handleInitialData: (req, res) => {
    saveInit(() => {
      res.send('initial data saved to db');
    })
  },

  handleGetRequest: (req, res) => {
    readAll((data) => {
      res.send(data);
    })

  },

  handlePostRequest: (req, res) => {
    var word = req.body.word;
    var definition = req.body.definition;
    saveOne({ word, definition }, () => {
      readAll((data) => {
        res.send(data);
      })
    })
  },

  handleSearchRequest: (req, res) => {
    var keyword = req.body.keyword;
    search(keyword, (data) => {
      res.send(data);
    })
  }
}