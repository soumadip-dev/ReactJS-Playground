export default function CommonInput({ 
  label, 
  onChange, 
  name, 
  id, 
  placeholder, 
  value,
  type = 'text' 
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={id || name}
        placeholder={placeholder || 'Enter the value'}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
}