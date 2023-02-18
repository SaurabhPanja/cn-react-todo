import "./Tooltip.css";

function Tooltip() {
  return (
    <div className="tooltip-container">
      <div className="tooltip tooltip-left">Tooltip Left</div>
      <div className="tooltip-central-col">
        <div className="tooltip tooltip-down">Tooltip Down</div>
        <button className="tooltip-btn">Hover over me!</button>
        <div className="tooltip tooltip-up">Tooltip &nbsp;&nbsp;Up</div>
      </div>
      <div className="tooltip tooltip-right">Tooltip Right</div>
    </div>
  );
}

export default Tooltip;
