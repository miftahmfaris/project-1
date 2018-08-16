import React, { Component } from "react";
import "./App.css";

import Posts from "./component/Posts";
import Postform from "./component/Postform";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Welcome to React </h1>
        </header>
        <Postform />
        <Posts />
      </div>
    );
  }
}

export default App;
