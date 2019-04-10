import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
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

  onVideoSelect = video => {
    console.log("from the app!", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
