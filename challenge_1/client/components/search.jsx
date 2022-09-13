import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit (e) {
    e.preventDefault();
    var keyword = document.getElementById('search').value;
    console.log(keyword);
    axios.post('http://localhost:3000/search', { keyword })
      .then((response) => {
        this.props.handleSearch(response.data);
        document.getElementById('search').value = '';
      })
  }

  render() {
    return (
      <div>
        <div><label htmlFor="search">Search a glossary by keyword: </label></div>
        <div>
          <input name="search" id="search" placeholder="Enter keyword here"></input>
          <button name="search" onClick={this.handleSubmit.bind(this)}>Search</button>
        </div>
      </div>
    )

  }
}

export default Search;