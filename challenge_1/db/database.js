const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/glossary');
const Schema = mongoose.Schema;
const { seedFunc } = require('./fakerAPI.js');


const glossarySchema = new Schema({
  word: String,
  definition: String
})

const Glossaries = mongoose.model('Glossaries', glossarySchema);

module.exports = {
  saveOne: ({ word, definition }, cb) => {
    Glossaries.findOneAndUpdate({ word }, { word, definition }, {upsert: true})
      .then(() => {
        if (cb) {
          cb();
        } else {
          return;
        }
      })
      .catch(err => {
        console.error(err);
      })
  },

  saveInit: (cb) => {
    var promises = [];
    var wordList = seedFunc(50);
    Glossaries.find().then((data) => {
      if(data.length < 50) {
        var add = 50 - data.length;
        wordList.slice(0, add).forEach(entry => {
          promises.push(module.exports.saveOne(entry));
        });
        Promise.all(promises)
          .then(() => {
            cb();
          })
          .catch(err => {
            console.error(err);
          })
      } else {
        cb();
      }
    })
  },

  readAll: (cb) => {
    console.log('readAll');
    Glossaries.find()
      .then((data) => {
        cb(data.reverse());
      })
      .catch(err => {
        console.error(err);
      })
  },

  search: (keyword, cb) => {
    Glossaries.find({$or: [{word: keyword}, {definition: {$regex: keyword, $options: 'i'}}]})
      .then(data => {
        cb(data.reverse());
      })
      .catch(err => {
        console.error(err);
      })
  }

}

