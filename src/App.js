import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  clickHandler = (event) => {
    event.preventDefault()
    var currency_from = document.querySelector("#currency_from").value
    var currency_to = document.querySelector("#currency_to").value
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currency_from}_${currency_to}&compact=y`, {
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
      var rate = json[`${currency_from}_${currency_to}`].val
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
            <select id="currency_from" >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="SGD">SGD</option>
            </select>
        </p>
        <p>
          <label>TO: </label>
            <select id="currency_to">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="SGD">SGD</option>
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
