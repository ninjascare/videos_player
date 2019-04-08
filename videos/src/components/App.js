import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

export default class App extends Component {
  state = {
    videos: []
  };

  onTermSubmit = term => {
    youtube
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(response => {
        console.log(response.data.items);
        this.setState({ videos: response.data.items });
      });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <h1>I have {this.state.videos.length} videos</h1>
      </div>
    );
  }
}
