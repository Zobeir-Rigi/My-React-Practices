import React, { Fragment } from "react";
const user = "zobeir";
const Ternary = () => {
  return (
    <Fragment>
      <h2>Ternary Operator</h2>
      {user === "zobeir" && <h2>Welcome to my page {user}</h2>}
      
        {/* <h2>Who are you</h2> */}
      
    </Fragment>
  );
};

export default Ternary;
