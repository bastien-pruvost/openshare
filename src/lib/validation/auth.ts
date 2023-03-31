import { z } from 'zod';
import isStrongPassword from 'validator/lib/isStrongPassword';

export const signinSchema = z.object({
  email: z.string().trim().email().min(1, { message: 'You must enter your email' }),
  password: z.string().trim().min(1, { message: 'You must enter your password' })
});

export const signupSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email({ message: 'Email must be properly formatted (eg: example@email.com)' }),
    password: z
      .string()
      .trim()
      .min(8, {
        message: 'Password must contain at least 8 characters'
      })
      .max(128, { message: 'Password must contain less than 128 characters' })
      .refine(
        (password) =>
          isStrongPassword(password, {
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
          }),
        { message: 'Password must contain 1 lowercase, 1 uppercase, 1 number and 1 symbol' }
      ),
    confirmPassword: z.string().trim(),
    username: z
      .string()
      .trim()
      .min(2, {
        message: 'Username must contain at least 2 characters'
      })
      .max(64, { message: 'Username must contain less than 64 characters' })
      .regex(/^[a-zA-Z0-9éèêëàâäïîôöùûüç_-]+$/i, {
        message: 'Username can only contain letters, letters with accents, dashes and underscores'
      }),
    name: z
      .string()
      .trim()
      .min(2, {
        message: 'Name must contain at least 2 characters'
      })
      .max(64, { message: 'Name must contain less than 64 characters' })
      .regex(/^([a-zA-ZÀ-ÖØ-öø-ÿ]+[-'\s]?)+[a-zA-ZÀ-ÖØ-öø-ÿ]*$/i, {
        message: 'Name can only contain letters, letters with accents, spaces and dashes'
      })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  });
