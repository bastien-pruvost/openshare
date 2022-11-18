import { z } from 'zod';
import isStrongPassword from 'validator/lib/isStrongPassword';

export const signInSchema = z.object({
  usernameOrEmail: z
    .string()
    .trim()
    .min(1, { message: 'You must enter your email or your username' }),
  password: z.string().trim().min(1, { message: 'You must enter your password' }),
});

export const signUpSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email({ message: 'The email must be properly formatted (eg: example@email.com)' }),
    password: z
      .string()
      .trim()
      .min(8, {
        message: 'The password must contain at least 8 characters',
      })
      .max(64, { message: 'The password must contain less than 64 characters' })
      .refine(
        (password) =>
          isStrongPassword(password, { minLowercase: 1, minUppercase: 1, minNumbers: 1 }),
        { message: 'The password must contain lowercase, uppercase and numbers' }
      ),
    confirmPassword: z.string().trim(),
    username: z
      .string()
      .trim()
      .regex(/[A-Za-zÀ-ÖØ-öø-ÿ0-9-_]/g, {
        message:
          'The username can only contain letters, letters with accents, dashes and underscores',
      }),
    name: z
      .string()
      .trim()
      .regex(/[A-Za-zÀ-ÖØ-öø-ÿ0-9\s'-]/g, {
        message: 'The name can only contain letters, letters with accents, spaces and dashes',
      })
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
