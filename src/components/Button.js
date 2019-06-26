import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <button onClick={this.handleChange}>
        click here {this.state.number}
      </button>
    );
  }
}

export default Buttons;
