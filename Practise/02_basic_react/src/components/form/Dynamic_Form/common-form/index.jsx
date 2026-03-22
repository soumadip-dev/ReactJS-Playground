import CommonInput from '../common-input/index';

const formTypes = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea',
};

export default function CommonForm({
  formControls = [],
  formData,
  setFormData,
  handleSubmit,
  buttonText,
}) {
  function renderFormElement(currentFormElement) {
    let content = null;

    switch (currentFormElement?.componentType) {
      case formTypes.INPUT:
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
        break;

      default:
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
    <form onSubmit={handleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElementItem, index) => (
            <div key={index}>{renderFormElement(singleFormElementItem)}</div>
          ))
        : null}
      <div style={{ marginTop: '12px' }}>
        <buttonn type="submit">{buttonText || 'Submit'}</buttonn>
      </div>
    </form>
  );
}
