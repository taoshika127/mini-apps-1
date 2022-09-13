import React from 'react';

class GlossaryEntry extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="glossaryEntry">
        <p><b>Word: </b></p>
        <p>{this.props.data.word}</p>
        <p><b>Definition: </b></p>
        <p>{this.props.data.definition}</p>
        <button name="edit">Edit Entry</button>
        <button name="delete">Delete Entry</button>
      </div>
    )
  }
}

export default GlossaryEntry;