import { useState } from "react";
import "./App.css";
import RightBtn from "./child/RightBtn";
import LeftBtn from "./child/LeftBtn";

function App() {
  const [Count, setCount] = useState(0);
  const incrCount = () => {
    setCount(Count + 1);
  };
  const decsCount = () => {
    setCount(Count - 1);
  };

  return (
    <div className="App">
      <div className="count">{Count}</div>
      <div className="controls">
        <LeftBtn Count={Count} decsCount={decsCount} />{" "}
        <RightBtn incrCount={incrCount} />
        {/**passing function & state to the child component,so the child element can now access the passed func/state */}
      </div>
    </div>
  );
}

export default App;
