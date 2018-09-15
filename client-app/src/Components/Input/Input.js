import React, { Component } from 'react';
import Phrase from '../Phrase/Phrase';
import axios from 'axios';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      data: '',
      showPhrase: false
    };
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      inputValue: value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const phrase = this.state.inputValue;
    axios.post('http://localhost:3001/', { phrase }).then(res => {
      this.setState({
        data: res.data,
        showPhrase: true,
        inputValue: ''
      });
    });
  };

  render() {
    return (
      <section className="form-container">
        <h1 className="display-4">Hablame...</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="phrase"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Escribí algo"
          />
          <input
            className="button btn btn-primary btn-sm"
            type="submit"
            value="Go!"
          />
        </form>
        <div>
          {this.state.showPhrase ? <Phrase data={this.state.data} /> : null}
        </div>
      </section>
    );
  }
}

export default Input;
