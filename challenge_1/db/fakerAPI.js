const { faker } = require('@faker-js/faker');

module.exports = {
  seedFunc: (n) => {
    var wordList = [];
    for (var i = 0; i < n; i++) {
      var wordTypes = ['adjective', 'adverb', 'conjunction', 'interjection', 'noun', 'preposition', 'verb']
      wordType = wordTypes[Math.floor(Math.random() * 7)];
      defLength = Math.floor(Math.random() * 20) + 5;
      var entry = {word: faker.word[wordType](), definition: faker.random.words(defLength)}
      wordList.push(entry);
    }
    return wordList;
  }
}
