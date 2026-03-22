import CommonInput from '../common-input/index';
import CommonSelect from '../common-select';
import CommonTextarea from '../CommonTextarea';
import { formTypes } from '../config/index';

export default function CommonForm({
  formControls = [], // array  of field configuration => What fields to render
  formData, // Current values of all fields
  setFormData, // function to update form state
  handleSubmit, // form submission method
  buttonText, // Text on the submit button
}) {
  // This function decides what component to use for each field
  function renderFormElement(currentFormElement) {
    let content = null;

    switch (currentFormElement?.componentType) {
      // If it's an input field, use CommonInput
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={currentFormElement.label}
            id={currentFormElement.id}
            placeholder={currentFormElement.placeholder}
            name={currentFormElement.name}
            type={currentFormElement.type || 'text'}
            value={formData[currentFormElement.name] || ''}
            required={currentFormElement.required || false}
            disabled={currentFormElement.disabled || false}
            onChange={event =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      // If it's a select field, use CommonSelect
      case formTypes.SELECT:
        content = (
          <CommonSelect
            label={currentFormElement.label}
            id={currentFormElement.id}
            name={currentFormElement.name || ''}
            value={formData[currentFormElement.name] || ''}
            options={currentFormElement.options || []}
            placeholder={currentFormElement.placeholder}
            required={currentFormElement.required || false}
            disabled={currentFormElement.disabled || false}
            onChange={event =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      // If it's a textarea field, use CommonTextarea
      case formTypes.TEXTAREA:
        content = (
          <CommonTextarea
            label={currentFormElement.label}
            id={currentFormElement.id}
            name={currentFormElement.name}
            value={formData[currentFormElement.name] || ''}
            placeholder={currentFormElement.placeholder}
            rows={currentFormElement.rows || 4}
            required={currentFormElement.required || false}
            disabled={currentFormElement.disabled || false}
            maxLength={currentFormElement.maxLength}
            onChange={event =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        // If no type specified, use CommonInput as default
        content = (
          <CommonInput
            label={currentFormElement.label}
            id={currentFormElement.id}
            placeholder={currentFormElement.placeholder}
            name={currentFormElement.name}
            type={currentFormElement.type}
            value={formData[currentFormElement.name]}
            onChange={event =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
    }
    return content;
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      {formControls?.length
        ? formControls.map((singleFormElementItem, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              {renderFormElement(singleFormElementItem)}
            </div>
          ))
        : null}
      {/* Submit button */}
      <div
        style={{
          marginTop: '24px',
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '220px',
            height: '44px',
            marginTop: '8px',
            marginBottom: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.2s ease',
            outline: 'none',
            fontWeight: '600',
            color: 'white',
          }}
        >
          {buttonText || 'Submit'}
        </button>
      </div>
    </form>
  );
}
