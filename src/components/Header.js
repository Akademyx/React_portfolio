import React, { Component } from "react";
import Buttons from "./Button";
import SubmitForm from "./subcomponents/SubmitForm";
import Welcome from "./subcomponents/Welcome";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tran"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Submission works: " + this.state.name);
    event.preventDefault();
  }

  handleChange(event) {
    // this.setState({ name: event.target.value });
    this.setState({ name: this.state.name });
  }

  render() {
    const message = <p>This is a test</p>;
    const person = {
      name: "Alex",
      age: 31
    };
    return (
      <div>
        <Welcome name={this.state.name}>
          <p>This is a paragraph</p>
        </Welcome>
        <p>
          {message}
          <Buttons />
        </p>
        <SubmitForm name={person.name} age={person.age} />
      </div>
    );
  }
}

export default Heading;
