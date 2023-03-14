import { hash, verifyHash } from '../passwords';
import { describe, it, expect, expectTypeOf } from 'vitest';

describe('passwords utils', () => {
  describe('hash function', () => {
    it('should return a hashed password as a string', () => {
      const password = 'passwordtest';
      const hashedPassword = hash(password);

      expectTypeOf(hashedPassword).toBeString();
      expect(hashedPassword.length).toBeGreaterThan(0);
      expect(hashedPassword).not.toEqual(password);
    });
  });

  describe('verifyHash function', () => {
    it('should return true for correct password', () => {
      const password = 'passwordtest';
      const hashedPassword = hash(password);
      const isPasswordValid = verifyHash(password, hashedPassword);

      expect(isPasswordValid).toBe(true);
    });

    it('should return false for incorrect password', () => {
      const password = 'passwordtest';
      const incorrectPassword = 'notpasswordtest';
      const hashedPassword = hash(password);
      const isPasswordValid = verifyHash(incorrectPassword, hashedPassword);

      expect(isPasswordValid).toBe(false);
    });
  });
});
