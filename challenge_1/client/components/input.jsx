import React from 'react';
import axios from 'axios';

class Input extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit (e) {
    e.preventDefault();
    var word = document.getElementById('word').value;
    var definition = document.getElementById('definition').value;
    console.log(word, definition);
    axios.post('http://localhost:3000', { word, definition })
      .then((response) => {
        this.props.handleInputSubmit(response.data);
        document.getElementById('word').value = '';
        document.getElementById('definition').value = '';
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <div><label htmlFor="word">Add a word: </label></div>
        <div><input name="word" id="word" placeholder="Enter word here"></input></div>
        <div><label htmlFor="definition">Add a definition: </label></div>
        <div><input name="definition" id="definition" placeholder="Enter definition here"></input></div>
        <button name="input" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default Input;