// import React, { Component } from "react";
import React from "react";
// import { homedir } from "os";

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: this.props.name,
      age: this.props.age,
      userName: this.props.userName,
     };
    // const info= {
    //   name: useState(this.props.name),
    //   age: useState(this.props.age),
    //   userName: useState(this.props.userName)
    // }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    // console.log("We're logging item as: ")
    console.log("we're going from submitform to...")
    this.props.onSubmit(this.state)
  }

  handleChangeName(event) {
    event.preventDefault()
    // this.setState({ 
    //   name: event.target.value,
    //   age: event.target.age,
    //   userName: event.target.value,
    // });
    var target = event.target
    var name = target.value
    this.setState({
        name: [name]
    })
    console.log("handlchange ", name)
  }

  handleChangeAge(event){
    event.preventDefault()
    this.setState({
      age: event.target.value
    })
  }

  handleChangeUserName(event){
    event.preventDefault()
    this.setState({
      userName: event.target.value
    })
  }
  
  render() {
    // console.log("we're in the submit form console.log ", this.props, this.state);
    //both props and state have become the same thing.
    // console.log("render of submitform: ", this.props)
    console.log("render of submitform: ", this.state.name, this.state.age, this.state.userName)
    var selections = [31, 32, 33, 34];
    var options = selections.map(n =>
      <option key={n} value={n}>{n}</option>
    )
    return (
      <div>
        <br/>
        <hr />
        <form onSubmit={this.handleSubmit}>
          type here:
          <input
            type='text'
            name="name"
            defaultValue={this.state.name}
            // value={this.state.name}
            // value={this.state.name}
            // onChange={e => this.handleChange(e)}
            onChange={this.handleChangeName}
          />
          <br/>

          <p>
            Age Select: 
            <select 
              name="age" 
              defaultValue={this.state.age}
              onChange={this.handleChangeAge}
              // value={this.state.age}
            >
            {options}
            </select>
          </p>
          <p>Enter User Name</p>
          <input 
            type="text" 
            name="userName"
            defaultValue={this.state.userName}
            onChange={this.handleChangeUserName}
            />
          <button 
            // type="submit" 
            onClick={ this.handleSubmit }
            >
            Change data
          </button>
        </form>
        <hr />
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
