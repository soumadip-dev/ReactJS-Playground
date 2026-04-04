import { useForm } from 'react-hook-form';

export default function ReactHookFormBasic() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  function onSubmit(data) {
    console.log(data);
    alert('Form submitted successfully!');
    reset();
  }

  return (
    <div style={container}>
      <h2 style={heading}>Basic React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={form}>
        <div style={column}>
          <label htmlFor="name" style={label}>
            Full Name
          </label>

          <input
            style={input}
            placeholder="Enter your name"
            {...register('name', {
              required: 'Name cannot be empty',
              minLength: {
                value: 3,
                message: 'Minimum 3 characters',
              },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: 'Only letters allowed',
              },
            })}
            id="name"
          />

          {errors.name && <span style={error}>{errors.name.message}</span>}
        </div>

        <div style={column}>
          <label htmlFor="email" style={label}>
            Email
          </label>

          <input
            type="email"
            style={input}
            placeholder="Enter email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalid email format',
              },
            })}
            id="email"
          />

          {errors.email && <span style={error}>{errors.email.message}</span>}
        </div>

        <div style={column}>
          <label htmlFor="age" style={label}>
            Age
          </label>

          <input
            type="number"
            style={input}
            placeholder="Enter age"
            {...register('age', {
              required: 'Age is required',
              min: {
                value: 18,
                message: 'Minimum age 18',
              },
              max: {
                value: 100,
                message: 'Maximum age 100',
              },
            })}
            id="age"
          />

          {errors.age && <span style={error}>{errors.age.message}</span>}
        </div>

        <div style={column}>
          <label htmlFor="password" style={label}>
            Password
          </label>

          <input
            type="password"
            style={input}
            placeholder="Enter password"
            {...register('password', {
              required: 'Password required',
              minLength: {
                value: 6,
                message: 'Minimum 6 characters',
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message: 'Must contain uppercase, number, special character',
              },
            })}
            id="password"
          />

          {errors.password && <span style={error}>{errors.password.message}</span>}
        </div>

        <div style={column}>
          <label style={label}>Confirm</label>

          <input
            type="password"
            style={input}
            placeholder="Confirm password"
            {...register('confirmPassword', {
              required: 'Confirm your password',
              validate: value => value === password || 'Passwords do not match',
            })}
          />

          {errors.confirmPassword && <span style={error}>{errors.confirmPassword.message}</span>}
        </div>

        <div style={column}>
          <label htmlFor="gender" style={label}>
            Gender
          </label>

          <select
            {...register('gender', {
              required: 'Please select gender',
            })}
            id="gender"
            style={select}
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>

          {errors.gender && <span style={error}>{errors.gender.message}</span>}
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
  transition: '0.2s',
};

const error = {
  color: '#dc2626',
  fontSize: '12px',
};
