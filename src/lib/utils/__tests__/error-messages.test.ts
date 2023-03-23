import { describe, it, expect } from 'vitest';
import { formatErrorMessage } from '../error-messages';
import type { Account } from '@prisma/client';

describe('formatErrorMessage', () => {
  describe('formatAccountAlreadyAssociatedWithProvidersErrorMessage', () => {
    it('should throw an error if no accounts are provided', () => {
      expect(() => {
        formatErrorMessage.accountAlreadyAssociatedWithProviders(undefined!);
      }).toThrow();
      expect(() => {
        formatErrorMessage.accountAlreadyAssociatedWithProviders([]);
      }).toThrow();
    });

    it('should format the error message correctly with one account', () => {
      const accounts = [{ provider: 'Github' }] as Account[];
      const errorMessage = formatErrorMessage.accountAlreadyAssociatedWithProviders(accounts);
      expect(errorMessage).toEqual(
        'Your account is associated with Github, please connect with Github.',
      );
    });

    it('should format the error message correctly with two accounts', () => {
      const accounts = [{ provider: 'Github' }, { provider: 'Gitlab' }] as Account[];
      const errorMessage = formatErrorMessage.accountAlreadyAssociatedWithProviders(accounts);
      expect(errorMessage).toEqual(
        'Your account is associated with Github and Gitlab, please connect with Github or Gitlab.',
      );
    });

    it('should format the error message correctly with three accounts', () => {
      const accounts = [
        { provider: 'Github' },
        { provider: 'Gitlab' },
        { provider: 'Google' },
      ] as Account[];
      const errorMessage = formatErrorMessage.accountAlreadyAssociatedWithProviders(accounts);
      expect(errorMessage).toEqual(
        'Your account is associated with Github, Gitlab and Google, please connect with Github, Gitlab or Google.',
      );
    });
  });
});
