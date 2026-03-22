export default function CommonSelect({
  label, // Text label for the dropdown
  id, // HTML id attribute
  name, // Field name (for form data)
  value, // Currently selected value
  options = [], // Array of options to display
  placeholder, // Default "Select something" option
  onChange, // What to do when selection changes
  required = false, // Is this field required?
  disabled = false, // Is this field disabled?
}) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
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
          {required && (
            <span style={{ color: 'red', fontSize: '14px', fontWeight: '600' }}> *</span>
          )}
        </label>
      )}
      {/* The selecy dropdown */}
      <select
        id={id || name}
        name={name}
        value={value || ''}
        onChange={onChange}
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
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {/* If placeholder show the placeholder */}
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {/* Map through all options and create option tag for each */}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {' '}
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
