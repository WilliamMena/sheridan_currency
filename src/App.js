import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sheridan Currency</h1>
        </header>
        <p className="App-intro">
          This is an application used for converting currency.
        </p>


        <form>
        <p>
        Amount: <input type="number" name="amount"/>
        </p>

        <p>
          <label>FROM: </label>
            <select>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="sgd">SGD</option>
            </select>
        </p>
        <p>
          <label>TO: </label>
            <select>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="sgd">SGD</option>
            </select>
        </p>
        <input type="submit" value="CONVERT" />
        </form>


      </div>
    );
  }
}

export default App;
