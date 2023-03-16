import sha256 from 'crypto-js/sha256';

// Hash a password (string)
export const hash = (password: string) => {
  return sha256(password).toString();
};

// Compare a plaintext password with a hashed password (string)
export const verifyHash = (password: string, hashedPassword: string) => {
  const newHashedPassword = sha256(password).toString();
  return newHashedPassword === hashedPassword;
};
