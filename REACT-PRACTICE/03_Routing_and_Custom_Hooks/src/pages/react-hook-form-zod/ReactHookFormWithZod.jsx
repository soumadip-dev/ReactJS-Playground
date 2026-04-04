import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import formSchema from './formSchema';

export default function ReactHookFormWithZod() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data) {
    console.log(data);
    alert('Form submitted successfully!');
    reset();
  }

  return (
    <div style={container}>
      <h2 style={heading}>Zod + React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={form}>
        <div style={column}>
          <label style={label}>Full Name</label>

          <input style={input} placeholder="Enter your name" {...register('name')} />

          {errors.name && <span style={errorStyle}>{errors.name.message}</span>}
        </div>

        <div style={column}>
          <label style={label}>Email</label>

          <input type="email" style={input} placeholder="Enter email" {...register('email')} />
          {errors.email && <span style={errorStyle}>{errors.email.message}</span>}
        </div>

        <div style={column}>
          <label style={label}>Age</label>

          <input type="number" style={input} placeholder="Enter age" {...register('age')} />
          {errors.age && <span style={errorStyle}>{errors.age.message}</span>}
        </div>

        <div style={column}>
          <label style={label}>Password</label>

          <input
            type="password"
            style={input}
            placeholder="Enter password"
            {...register('password')}
          />
          {errors.password && <span style={errorStyle}>{errors.password.message}</span>}
        </div>

        <div style={column}>
          <label style={label}>Confirm Password</label>
          <div style={{ flex: 1 }}>
            <input
              type="password"
              style={input}
              placeholder="Confirm password"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <span style={errorStyle}>{errors.confirmPassword.message}</span>
            )}
          </div>
        </div>

        <div style={column}>
          <label style={label}>Gender</label>

          <select {...register('gender')} style={select}>
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span style={errorStyle}>{errors.gender.message}</span>}
        </div>

        <input type="submit" value="Submit" style={button} />
      </form>
    </div>
  );
}

//===========================================================================

const container = {
  width: '380px',
  padding: '30px',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  border: '1px solid #e5e7eb',
};

const heading = {
  marginBottom: '25px',
  fontSize: '20px',
  fontWeight: '700',
  color: '#1f2937',
  textAlign: 'center',
};

const form = {
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
};

const column = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
};

const label = {
  fontWeight: '600',
  color: '#374151',
  fontSize: '14px',
  width: '110px',
};

const input = {
  padding: '11px',
  border: '1px solid #d1d5db',
  borderRadius: '7px',
  fontSize: '14px',
  flex: 1,
};

const select = {
  padding: '11px',
  border: '1px solid #d1d5db',
  borderRadius: '7px',
  background: '#fff',
  fontSize: '14px',
  flex: 1,
};

const button = {
  marginTop: '10px',
  padding: '13px',
  background: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '15px',
};

const errorStyle = {
  color: '#dc2626',
  fontSize: '12px',
};
