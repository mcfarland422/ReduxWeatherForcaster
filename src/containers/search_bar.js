import React, { Component } from 'react';  // import react

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };  // state is set to an empty string value with the key of term.

    this.onInputChange = this.onInputChange.bind(this);  // binding onInputChange
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
