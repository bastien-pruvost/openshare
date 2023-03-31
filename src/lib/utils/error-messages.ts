import type { Account } from '@prisma/client';

export const formatErrorMessage = {
  accountAlreadyAssociatedWithProviders: (accounts: Account[]) => {
    if (!accounts || accounts.length < 1) {
      throw new Error();
    }

    let stringAssociatedWith = '';
    let stringConnectWith = '';

    accounts.forEach((account, index) => {
      if (accounts.length === 1) {
        stringAssociatedWith = account.provider;
        stringConnectWith = account.provider;
      } else if (index === accounts.length - 1) {
        stringAssociatedWith += ` and ${account.provider}`;
        stringConnectWith += ` or ${account.provider}`;
      } else if (index === 0) {
        stringAssociatedWith += `${account.provider}`;
        stringConnectWith += `${account.provider}`;
      } else {
        stringAssociatedWith += `, ${account.provider}`;
        stringConnectWith += `, ${account.provider}`;
      }
    });
    return `Your account is associated with ${stringAssociatedWith}, please connect with ${stringConnectWith}.`;
  }
};
