//this is the page for applying
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Applyform from './components/applyform'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*replace the url with your typeform embed url*/}
        <Applyform url="https://urlOfTypeform.typeform.com/..." />
      </div>
    );
  }
}

export default App;
