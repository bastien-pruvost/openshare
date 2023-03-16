import { describe, expect, it } from 'vitest';
import { signinSchema, signupSchema } from '../auth';

describe('Sign In schema', () => {
  it('should pass validation with valid input', () => {
    const validInputs = [{ email: 'email@test.com', password: 'Password-Test-123456' }];

    validInputs.forEach((input) => {
      expect(() => signinSchema.parse(input)).not.toThrowError();
    });
  });

  it('should fail validation with empty input', () => {
    const emptyInput = { email: '', password: '' };

    expect(() => signinSchema.parse(emptyInput)).toThrowError('You must enter your email');
  });
});

describe('Sign Up schema', () => {
  it('should pass validation with valid input', () => {
    const validInput = {
      email: 'email@test.com',
      password: 'Password-Test-123456',
      confirmPassword: 'Password-Test-123456',
      name: 'John-Doe José',
      username: 'john_doe-75-28',
    };

    expect(() => signupSchema.parse(validInput)).not.toThrowError();
  });

  it('should fail validation with invalid inputs', () => {
    const invalidInputs = [
      {
        email: 'invalid email',
        password: 'Password-Test-123456',
        confirmPassword: 'Password-Test-123456',
        name: 'John Test',
        username: 'john_doe-75-28',
      },
      {
        email: 'email@test.com',
        password: 'InvalidPasswordTest123456',
        confirmPassword: 'InvalidPasswordTest123456',
        name: 'John Test',
        username: 'john_doe-75-28',
      },
      {
        email: 'email@test.com',
        password: 'Password-Test-123456',
        confirmPassword: 'password mismatch',
        name: 'John Test',
        username: 'john_doe-75-28',
      },
      {
        email: 'email@test.com',
        password: 'Password-Test-123456',
        confirmPassword: 'Password-Test-123456',
        name: 'John Test $%:/!-_',
        username: 'john_doe-75-28',
      },
      {
        email: 'email@test.com',
        password: 'Password-Test-123456',
        confirmPassword: 'Password-Test-123456',
        name: 'John Test',
        username: 'username with space',
      },
    ];

    invalidInputs.forEach((input) => {
      expect(() => signupSchema.parse(input)).toThrowError();
    });
  });
});
