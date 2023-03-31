'use client';
import styles from './auth-forms.module.scss';

import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

import { signupSchema } from '@/lib/validation/auth';
import { cn } from '@/lib/utils/classnames';

import type { z } from 'zod';

type SignupFormProps = {
  className?: string;
};

type SignupValues = z.infer<typeof signupSchema>;

export const SignupForm = ({ className }: SignupFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupValues>({ resolver: zodResolver(signupSchema) });

  const handleSignup = async (data: SignupValues) => {
    const response = await fetch(`/api/user/create`, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    const resBody = await response.json();
    console.log(resBody);

    // if (!response.ok) {
    //   console.log(resBody);
    // }
  };

  const handleGithubSignin = async () => {
    const response = await signIn('github', {
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/'
    });

    if (!response?.ok && response?.error) {
      setError(response.error);
    }

    // if (response?.ok) {
    //   router.push('/');
    // }
  };

  return (
    <div className={cn(styles.container, className)}>
      <form className={styles.form} onSubmit={handleSubmit(handleSignup)}>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            placeholder='example@email.com'
            // autoComplete='email'
            // autoCapitalize='off'
            // autoCorrect='off'
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            placeholder='********'
            // autoComplete='off'
            // autoCapitalize='off'
            // autoCorrect='off'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            id='confirmPassword'
            type='password'
            placeholder='********'
            // autoComplete='off'
            // autoCapitalize='off'
            // autoCorrect='off'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            placeholder='John Doe'
            // autoComplete='name'
            // autoCapitalize='words'
            // autoCorrect='off'
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            placeholder='john_doe_the_dev'
            // autoComplete='username'
            // autoCapitalize='off'
            // autoCorrect='off'
            {...register('username')}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <button>Create Account</button>
      </form>

      <span>{error}</span>

      <button onClick={handleGithubSignin}>Sign Up with Github</button>
    </div>
  );
};
