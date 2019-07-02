import React, { Component } from "react";
import Text from './Text';
import Text2 from './Text2';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      number: this.props.number,
      isEven: this.props.isEven
    };

    // this.handleChange = this.handleChange.bind(this);
    this.addOne = this.addOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  addOne() {
    this.setState({ number: this.state.number + 1, isEven: !this.state.isEven });
    this.props.onClick(this.state)
    console.log("We're at addOne")
  }

  reset() {
    this.setState({ number: 0, isEven: true });
  }

  render() {
    var even = this.state.isEven
    var msg = even? <Text/> : <Text2/>;
    console.log("we're in buttons ", this.props.number)

    return (
      <div>
        <button onClick={this.addOne}>Add One</button>
        <p>Our number is: {this.state.number}</p>
        <button onClick={this.reset}>Reset</button>
        {msg}
        {/* {even? <Text/>:<Text2/>} */}
      </div>
    );
  }
}

export default Buttons;
