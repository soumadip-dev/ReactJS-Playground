import z from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

const formSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .max(20, 'Name must be less than 20 characters long'),
    email: z.string().email('Invalid email address'),
    age: z.coerce
      .number({ invalid_type_error: 'Age is required' })
      .min(18, 'You must be at least 18 years old')
      .max(100, 'You must be less than 100 years old'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(20, 'Password must be less than 20 characters long')
      .regex(
        passwordRegex,
        'Password must include uppercase, lowercase, number, and special character'
      ),
    confirmPassword: z.string().min(8, 'Confirm Password is required'),
    gender: z.enum(['female', 'male', 'other'], {
      errorMap: () => ({ message: 'Please select a gender' }),
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export default formSchema;
