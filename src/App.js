import React from "react";
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Header";
import Clock from "./components/subcomponents/Clock";

// const timer = <p>Another timer: {new Date().toLocaleTimeString()}</p>;

function App() {
  // const tick = (
  //   <div>
  //     <p>Your time is: {new Date().toLocaleTimeString()}</p>
  //   </div>
  // );

  return (
    <div className='App'>
      <Heading />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        {/* <p>{tick}</p> */}
        {/* <p>Your time is: {new Date().toLocaleTimeString()}</p> */}
        {/* {timer} */}
        <Clock />
      </header>
    </div>
  );
  // ReactDOM.render(timer, document.getElementById("root"));
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(App, document.getElementById("root"));
