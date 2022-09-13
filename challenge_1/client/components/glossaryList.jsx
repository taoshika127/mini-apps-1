import React from 'react';
import GlossaryEntry from './glossaryEntry.jsx';

class Glossary extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        {this.props.data.map((entry, index) => {
          return (<div key={index}>
            <GlossaryEntry data={entry} />
          </div>)
        })}
      </div>
    )
  }
}

export default Glossary;