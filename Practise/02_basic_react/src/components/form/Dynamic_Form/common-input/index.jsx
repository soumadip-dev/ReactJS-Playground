export default function CommonInput({
  label, // Text label (like "Email")
  onChange, // What to do when user types
  name, // Identifier (like "email")
  id, // HTML id
  placeholder, // Hint text (like "Enter your email")
  value, // Current value in the input
  type = 'text', // Input type (text, password, email, etc.)
  required = false,
  disabled = false,
}) {
  return (
    <div>
      {/* Label for the input */}
      <label
        htmlFor={id || name}
        style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: '600',
          color: '#333',
          textAlign: 'left',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {label}
        {required && <span style={{ color: 'red', fontSize: '14px', fontWeight: '600' }}> *</span>}
      </label>
      {/* Input field */}
      <input
        name={name}
        id={id || name}
        placeholder={placeholder || 'Enter the value'}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        disabled={disabled}
        style={{
          display: 'block',
          padding: '10px 12px',
          width: '100%',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          borderRadius: '6px',
          fontSize: '16px',
          lineHeight: '1.5',
          outline: 'none',
          backgroundColor: disabled ? '#f5f5f5' : 'white',
        }}
      />
    </div>
  );
}
