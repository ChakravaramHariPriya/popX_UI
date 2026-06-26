import "../styles/input.css";

function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;