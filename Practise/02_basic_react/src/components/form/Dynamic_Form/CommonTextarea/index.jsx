export default function CommonTextarea({
  label, // Text label
  id, // HTML id
  name, // Field name
  value, // Current text value
  placeholder, // Hint text
  onChange, // What to do when typing
  rows = 4, // Number of visible rows
  required = false, // Is this field required?
  disabled = false, // Is this field disabled?
  maxLength, // Maximum characters allowed
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

      {/* Textarea field */}
      <textarea
        id={id || name}
        name={name}
        value={value || ''} // Ensure value is never undefined
        onChange={onChange}
        placeholder={placeholder || `Enter ${label?.toLowerCase() || 'text'}...`}
        rows={rows}
        required={required}
        disabled={disabled}
        maxLength={maxLength}
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
          resize: 'vertical', // Allow vertical resizing only
          backgroundColor: disabled ? '#f5f5f5' : 'white',
        }}
      />
      {/* Character count (if maxLength is set) */}
      {maxLength && (
        <div
          style={{
            fontSize: '12px',
            color: '#666',
            marginTop: '6px',
            textAlign: 'right',
          }}
        >
          {value?.length || 0} / {maxLength} characters
        </div>
      )}
    </div>
  );
}
