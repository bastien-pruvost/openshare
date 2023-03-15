'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn, signOut } from 'next-auth/react';

import { signInSchema, signUpSchema } from 'src/lib/validations/auth';
import { cn } from 'src/lib/utils/classnames';
import { hash } from 'src/lib/utils/passwords';

import styles from './auth-form.module.scss';

type AuthFormProps = {
  method: 'signin' | 'signup';
  className?: string;
};

type SignInValues = z.infer<typeof signInSchema>;
type SignUpValues = z.infer<typeof signUpSchema>;
type AuthValues = SignInValues & SignUpValues;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function AuthForm({ method, className }: AuthFormProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthValues>({
    resolver: method === 'signin' ? zodResolver(signInSchema) : zodResolver(signUpSchema),
  });

  async function onSignIn(data: SignInValues) {
    const signInResponse = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (signInResponse?.ok) {
      router.push('/');
    }
  }

  async function onSignUp(data: SignUpValues) {
    const body = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      username: data.username,
      name: data.name,
    };

    const signUpResponse = await fetch(`${apiUrl}/user/create`, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    const resBody = await signUpResponse.json();

    console.log('!!! SIGNUP_RESULT : ', signUpResponse);

    if (!signUpResponse.ok) {
      console.log(resBody);
    }
  }

  async function onSubmit(data: AuthValues) {
    if (method === 'signin') {
      onSignIn(data);
    }

    if (method === 'signup') {
      onSignUp(data);
    }
  }

  return (
    <div className={cn(styles.container, className)}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          {method === 'signin' ? (
            <label htmlFor='usernameOrEmail'>Email or Username</label>
          ) : (
            <label htmlFor='email'>Email</label>
          )}
          <input
            id={method === 'signin' ? 'usernameOrEmail' : 'email'}
            type='text'
            placeholder='example@email.com'
            autoCapitalize='none'
            autoComplete={method === 'signin' ? 'username' : 'off'}
            autoCorrect='off'
            {...register(method === 'signin' ? 'usernameOrEmail' : 'email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
          {errors.usernameOrEmail && <p>{errors.usernameOrEmail.message}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            placeholder='********'
            autoCapitalize='none'
            autoComplete={method === 'signin' ? 'current-password' : 'off'}
            autoCorrect='off'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        {method === 'signup' ? (
          <>
            <div className={styles.formGroup}>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                id='confirmPassword'
                type='password'
                placeholder='********'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='username'>Username</label>
              <input
                id='username'
                type='text'
                placeholder='john_doe_75'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                {...register('username')}
              />
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                type='text'
                placeholder='John Doe'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                {...register('name')}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          </>
        ) : null}

        <button>{method === 'signin' ? 'Sign In' : 'Create account'}</button>
      </form>

      <p>
        <br />
      </p>

      <button onClick={() => signIn('github', { redirect: false })}>
        {method === 'signin' ? 'Sign In' : 'Sign Up'} with GitHub
      </button>

      <p>
        <br />
      </p>

      <button onClick={() => signOut({ redirect: false })}>Sign Out</button>
    </div>
  );
}
