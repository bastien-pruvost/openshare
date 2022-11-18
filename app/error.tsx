'use client';

import { useEffect } from 'react';

import '@/assets/styles/globals.scss';

export default function RootError({ error, reset }: { error: Error; reset(): void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h3>Something went wrong...</h3>
      <button onClick={() => reset()}>Reset error</button>
    </div>
  );
}
