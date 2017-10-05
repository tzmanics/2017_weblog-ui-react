import React, { Component } from 'react';
import './App.css';

const BlogList = () => (
  <ul>
    <li> Post 1 </li>
    <li> Post 2 </li>
  </ul>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">tzmanics weblog</h1>
        </header>
        <p className="App-intro">
          👁 a look into the things i make
        </p>
        <BlogList />
      </div>
    );
  }
}

export default App;
