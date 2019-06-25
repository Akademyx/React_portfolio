import React, { Component } from "react";
import Buttons from "./Button";
import SubmitForm from "./subcomponents/SubmitForm";

class Heading extends Component {
  render() {
    const message = <p>This is a test</p>;
    return (
      <div>
        <p>
          {message}
          <Buttons />
        </p>
        <SubmitForm />
      </div>
    );
  }
}

export default Heading;
