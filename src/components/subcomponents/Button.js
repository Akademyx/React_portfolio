import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };

    // this.handleChange = this.handleChange.bind(this);
    this.addOne = this.addOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  // handleChange() {
  //   this.setState({ number: this.state.number + 1 });
  // }

  addOne() {
    this.setState({ number: this.state.number + 1 });
  }

  reset() {
    this.setState({ number: 0 });
  }

  render() {
    return (
      <div>
        <button onClick={this.addOne}>Add One</button>
        <p>Our number is: {this.state.number}</p>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Buttons;
