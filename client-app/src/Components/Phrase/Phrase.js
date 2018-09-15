import React, { Component } from 'react';

class Phrase extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="phrase-container">
        <p>{this.props.data}</p>
      </section>
    );
  }
}

export default Phrase;
