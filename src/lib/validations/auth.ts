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
      .max(128, { message: 'The password must contain less than 128 characters' })
      .refine(
        (password) =>
          isStrongPassword(password, {
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          }),
        { message: 'The password must contain 1 lowercase, 1 uppercase, 1 number and 1 symbol' },
      ),
    confirmPassword: z.string().trim(),
    username: z
      .string()
      .trim()
      .min(2, {
        message: 'The username must contain at least 2 characters',
      })
      .max(64, { message: 'The username must contain less than 64 characters' })
      .regex(/^[a-zA-Z0-9éèêëàâäïîôöùûüç_-]+$/i, {
        message:
          'The username can only contain letters, letters with accents, dashes and underscores',
      }),
    name: z
      .string()
      .trim()
      .regex(/^([a-zA-ZÀ-ÖØ-öø-ÿ]+[-'\s]?)+[a-zA-ZÀ-ÖØ-öø-ÿ]*$/i, {
        message: 'The name can only contain letters, letters with accents, spaces and dashes',
      })
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
