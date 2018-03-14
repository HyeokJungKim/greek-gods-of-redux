import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GodsList from "./components/GodsList";
import GodForm from "./components/GodForm";

class App extends Component {
  render() {
    console.log(GodsList);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GodsList />
        <GodForm />
      </div>
    );
  }
}

export default App;
