import { describe, expect, it } from 'vitest';
import { signInSchema, signUpSchema } from '../auth';

describe('Sign In schema', () => {
  it('should pass validation with valid input', () => {
    const validInputs = [
      { usernameOrEmail: 'testusername', password: 'PasswordTest123456' },
      { usernameOrEmail: 'testemail@gmail.com', password: 'PasswordTest123456' },
    ];

    validInputs.forEach((input) => {
      expect(() => signInSchema.parse(input)).not.toThrowError();
    });
  });

  it('should fail validation with empty input', () => {
    const emptyInput = { usernameOrEmail: '', password: '' };

    expect(() => signInSchema.parse(emptyInput)).toThrowError(
      'You must enter your email or your username',
    );
  });
});

describe('Sign Up schema', () => {
  it('should pass validation with valid input', () => {
    const validInput = {
      email: 'testemail@gmail.com',
      password: 'Password-Test-123456',
      confirmPassword: 'Password-Test-123456',
      username: 'da_qzd-tet-zqd_ioubqzd123é',
      name: `John-Doe José`,
    };

    expect(() => signUpSchema.parse(validInput)).not.toThrowError();
  });

  it('should fail validation with invalid input', () => {
    const invalidInput = {
      email: 'invalid email',
      password: 'password',
      confirmPassword: 'mismatched password',
      username: 'invalid username*',
    };

    expect(() => signUpSchema.parse(invalidInput)).toThrowError();
  });
});
