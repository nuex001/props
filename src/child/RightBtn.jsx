import React from "react";

function RightBtn(props) {
  // passing props as an arg so it can be accessible by this component
  return <button onClick={props.incrCount}>+</button>;
}

export default RightBtn;
