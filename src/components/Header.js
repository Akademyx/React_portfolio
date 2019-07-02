import React, { Component } from "react";
import Buttons from "./Button";
import SubmitForm from "./subcomponents/SubmitForm";
import Welcome from "./subcomponents/Welcome";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tran",
      age: 31,
      userName: "Akademyx"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(state) {
    console.log("we're on handleSubmit of Header :" + state)
    // alert("Submission works: " + this.state.name);
  }

  handleChange(event) {
    // this.setState({ name: event.target.value });
    this.setState({ name: this.state.name });
  }

  render() {
    const message = <p>This is a test</p>;
    return (
      <div>
        <Welcome name={this.state.name}>
          <p>This is a paragraph</p>
        </Welcome>
        <p>
          {message}
          <Buttons />
        </p>
        <SubmitForm name={this.state.name} age={this.state.age} userName={this.state.userName} onSubmit={e => this.handleSubmit(e)}/>
      </div>
    );
  }
}

export default Heading;
