import React, { Component } from "react";
import ReactDOM from "react-dom";

// frunction clock() {
//     const ticker = (
//         <div>
//             <h2>It is {new Date().toLocaleDateString()}</h2>
//         </div>
//     )
//     ReactDOM.render(ticker,document.getElementById('root')
// };

export const clock = () => {
  return <h2>It is {new Date().toLocaleDateString()}</h2>;
  ReactDOM.render();
};
