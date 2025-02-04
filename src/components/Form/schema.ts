import z from 'zod';

export const schema = z.object({
  name: z.string().min(3, 'Name to include at least 3 letters'),
  email: z.string().email('Incorrect Email'),
  message: z.string().min(2, 'The message need to contain at least 2 letters'),
});
