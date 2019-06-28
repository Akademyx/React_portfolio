import React from "react";
import Clock from "./subcomponents/Clock";
import Button from "./subcomponents/Button";

const NavBar = props => {
  return (
    <div>
      <div className='navbar-header'>
        {/* <ul className='nav navbar-nav'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
        </ul> */}
      </div>
      <Clock />
      <Button />
    </div>
  );
};

export default NavBar;

//purpose of this feature is learning stateless components
//with stateless components, we can just export a "const" instead of making a "class"
