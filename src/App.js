import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip position="top" text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
      <Tooltip position="bottom" text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
      <Tooltip position="left" text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
      <Tooltip position="right" text="This is a tooltip">
        <button>Hover me</button>
      </Tooltip>
    </div>
  );
};

export default App;
