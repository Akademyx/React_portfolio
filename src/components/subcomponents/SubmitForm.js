// import React, { Component } from "react";
import React from "react";
// import { homedir } from "os";

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: this.props.name,
      age: this.props.age,
      userName: this.props.userName
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(item) {
    console.log("We're logging item as: ", item)
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    // console.log("we're in the submit form console.log ", this.props, this.state);
    //both props and state have become the same thing.

    return (
      <div>
        <form onSubmit={this.handleSubmit(this.state.name)}>
          type here:
          <input
            type='text'
            name={this.state.name}
            // value={}
            onChange={e => this.handleChange(e)}
          />
          <p>
            <input type='submit' onSubmit={this.handleSubmit(this.state.name)} />
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
