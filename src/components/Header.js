import React, { Component } from "react";
import Buttons from "./subcomponents/Button";
import SubmitForm from "./subcomponents/SubmitForm";
import Welcome from "./subcomponents/Welcome";
import Text from "./subcomponents/Text"
import Text2 from "./subcomponents/Text2"

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tran",
      age: 31,
      userName: "Akademyx",
      number: 0,
      isEven: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clicker = this.clicker.bind(this);
  }

 
  clicker(state){
    this.setState(state)
    console.log("clicker just triggered")
    }
  handleSubmit(state) {
    this.setState(state)
    console.log("we're on handleSubmit of Header : " + state.name + " with the age of " + state.age, state.userName)
    // alert("Submission works: " + this.state.name);
  }

  handleChange(event) {
    // this.setState({ name: event.target.value });
    this.setState({ name: this.state.name });
  }

  render() {

    const message = "This is a test";
    const even = this.state.isEven;
    const status = this.state.isEven;
    // console.log("Header.js log")
    var num = this.state.number;
    var person = this.state;
    var display = status? <Text/> : <Text2/>
    // const text = num %2 === 0? <Text2/> : <Text/>
    console.log("Triggering Header ")
    return (
      <div>
        <Welcome name={person.name} age={person.age} userName={person.userName}>
          <p>This is a paragraph</p>
        </Welcome>
        {message}
        <SubmitForm 
          // name={this.state.name} 
          // age={this.state.age} 
          // userName={this.state.userName} 
          state={this.state} 
          onSubmit={e => this.handleSubmit(e)}
        />
        <Buttons number={num} isEven={even} onClick={e => this.clicker(e)}/>
        {display}
      </div>
    );
  }
}

export default Heading;
