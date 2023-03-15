'use client';

import { useEffect } from 'react';

type RootErrorProps = { error: Error; reset(): void };

const RootError = ({ error, reset }: RootErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h3>Something went wrong...</h3>
      <button onClick={() => reset()}>Reset error</button>
    </div>
  );
};

export default RootError;
