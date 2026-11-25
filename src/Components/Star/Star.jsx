import PropTypes from "prop-types";

export default function Star({ color = "black" }) {
  const lineStyle = {
    backgroundColor: color,
    width: "80px",
    height: "4px",
  };
  return (
    <div className="d-flex align-items-center justify-content-center mb-3">
      <div className="line ms-3" style={lineStyle}></div>
      <i className="fa-solid fa-star ms-3" style={{ color }}></i>
      <div className="line ms-3" style={lineStyle}></div>
    </div>
  );
}

Star.propTypes = {
  color: PropTypes.string,
};
