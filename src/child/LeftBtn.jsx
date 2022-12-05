import React from "react";

function LeftBtn(props) {
  // accessing the props child
  // we would check if count is less than 0 , then disable
  return props.Count <= 0 ? (
    <button disabled style={{ color: "red" }}>
      -
    </button>
  ) : (
    <button onClick={props.decsCount}>-</button>
  );
}

export default LeftBtn;
