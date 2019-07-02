import React from "react";

function Welcome(props) {
  // console.log(props.children); //Logs the <p> tag from Header
  // console.log(<hr />); //Logs a blank object
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      {/* <p>{this.props.children}</p> */}
      <hr />
      {props.children}
    </div>
  );
}

export default Welcome;
