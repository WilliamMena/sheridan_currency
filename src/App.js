import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  clickHandler = (event) => {
    event.preventDefault()
    fetch("https://free.currencyconverterapi.com/api/v6/convert?q=EUR_USD&compact=y", {
      method: "GET",
      mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then( (response) => response.json())
    .then((json) => {
      var amount = document.querySelector("#amount").value
      var rate = json["EUR_USD"].val
      var output = amount * rate

      document.querySelector(".output").innerHTML = output
    })
  }

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
        Amount: <input type="number" id="amount"/>
        </p>

        <p>
          <label>FROM: </label>
            <select>
              <option id="" value="usd">USD</option>
              <option id="" value="eur">EUR</option>
              <option id="" value="sgd">SGD</option>
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
        <input type="submit" value="CONVERT" onClick={this.clickHandler} />
        </form>
        <label>OUTPUT: </label>
        <h1 className="output"></h1>
      </div>
    );
  }
}

export default App;
