import React, { Component } from "react";

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("Submission works: " + this.state.name);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          type here:
          <input
            type='text'
            name='name'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type='submit' value='For form submission' />
        </form>
      </div>
    );
  }
}

export default SubmitForm;
