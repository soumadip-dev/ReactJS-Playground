export default function CommonSelect({
  label,
  id,
  name,
  value,
  options = [],
  placeholder,
  onChange,
  required = false,
}) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} name={name} value={value} onChange={onChange} required={required}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
