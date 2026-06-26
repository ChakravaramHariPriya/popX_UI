import "../styles/button.css";

function Button({
  text,
  background,
  color,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className="btn"
      style={{
        background,
        color,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;