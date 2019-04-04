import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      term: e.target.value
    });
  };

  handleSubmit = eve => {
    eve.preventDefault();
    // TODO: make sure we call
    // callback from parent Component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
