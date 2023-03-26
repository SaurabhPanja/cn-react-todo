import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ position }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button>Hover me</button>
      {isVisible && (
        <div className={`tooltip tooltip-${position}`}>
          <div className="tooltip-content">This is a tooltip</div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
