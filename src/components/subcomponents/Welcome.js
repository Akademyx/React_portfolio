import React from "react";

const Welcome = (props) => {
  // console.log(props.children); //Logs the <p> tag from Header
  // console.log(<hr />); //Logs a blank object
  // console.log("we're in Welcome component ", props.children)
  var name = props.name
  // var msg = `Hello ${name}, Your age is: ${props.age}, and username is ${props.userName}` 
  var msg = "Hello " + name + ",\nyour age is " + props.age + ",\nand your userName is " + props.userName
  // if(name.length === 0){
  //   msg = "Please enter a name "
  // } else {
  //   msg = "Hello " + name
  // }
  
  //this doesn't work unfortunately, we would need a functional component not a stateless to work this idea.
  return (
    <div>
      {msg}
      {/* <p>{this.props.children}</p> */}
      <hr />
        {props.children}
    </div>
  );
}



export default Welcome;
