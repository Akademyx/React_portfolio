import React, { Component } from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    });
  }

  render() {
    return (
      <h2 className='App-clock'>
        <p>The time is {this.state.time}</p>
        <p>The Date is {this.state.date}</p>
      </h2>
    );
  }
}

// function Clock() {
//   return (
//     <h2>
//       <p>Today's date {new Date().toLocaleDateString()}</p>
//       <p>And the time is: {new Date().toLocaleTimeString()}</p>
//     </h2>
//   );
// }

export default Clock;
