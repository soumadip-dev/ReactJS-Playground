import ReactHookFormBasic from './ReactHookFormBasic';
import ReactHookFormWithZod from './ReactHookFormWithZod';

export default function ReactHookForm() {
  return (
    <div style={page}>
      <h1 style={title}>React Hook Form and Zod Validation</h1>

      <div style={wrapper}>
        <ReactHookFormBasic />
        <ReactHookFormWithZod />
      </div>
    </div>
  );
}

//===========================================================================

const page = {
  padding: '40px',
  background: '#f1f5f9',
  fontFamily: 'Arial, sans-serif',
};

const title = {
  textAlign: 'center',
  marginBottom: '40px',
  color: '#111827',
  fontSize: '28px',
  fontWeight: '700',
};

const wrapper = {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
};
