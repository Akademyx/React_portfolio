// import React, { Component } from "react";
import React from "react";
import { homedir } from "os";

class SubmitForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { name: "" };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(event) {
  //   alert("Submission works: " + this.state.name);
  //   event.preventDefault();
  // }

  // handleChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  render() {
    console.log("this person");
    console.log(this.props);
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          type here:
          <input
            type='text'
            name='name'
            value={this.props.value}
            onChange={this.handleChange}
          />
          <p>
            <input type='submit' value='For form submission' />
          </p>
        </form>
        <p>{this.props.age}</p>
      </div>
    );
  }
}

// function SubmitForm(props) {
//   return (
//     <div>
//       <form
//       // onSubmit={this.handleSubmit}
//       >
//         type here:
//         <input
//           type='text'
//           name='name'
//           value={props.value}
//           // onChange={this.handleChange}
//         />
//         <input type='submit' value='For form submission' />
//       </form>
//     </div>
//   );
// }

// homedir.propTypes = {
//   name: React.Proptypes.string,
//   age: React.Proptypes.number
// };

export default SubmitForm;
