import z from 'zod';

const formSchema = z.object({
  goal: z.string().min(5, { message: 'Goal must be at least 5 characters' }),
  summary: z.string().min(5, { message: 'Summary must be at least 5 characters' }),
});

export default formSchema;
