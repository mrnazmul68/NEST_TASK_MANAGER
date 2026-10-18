import { z } from 'zod';

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Name is required' })
    .max(80, { message: 'Name must be at most 80 characters' }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Enter a valid email address' }),

  password: z
    .string()
    .min(12, { message: 'Password must be at least 12 characters' })
    .refine((value) => Buffer.byteLength(value, 'utf8') <= 72, {
      message: 'Password is too long',
    }),
});

export type RegisterInput = z.infer<typeof registerSchema>;
