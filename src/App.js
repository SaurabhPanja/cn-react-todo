import React from "react";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip position="top"></Tooltip>
      <Tooltip position="bottom"></Tooltip>
      <Tooltip position="left"></Tooltip>
      <Tooltip position="right"></Tooltip>
    </div>
  );
};

export default App;
