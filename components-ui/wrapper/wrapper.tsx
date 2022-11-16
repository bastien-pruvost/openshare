import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils/classnames';
import styles from './wrapper.module.scss';

type WrapperProps = PropsWithChildren<{
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}>;

export function Wrapper({ children, className, size = 'xl' }: WrapperProps) {
  return <div className={cn(styles.wrapper, styles[size], className && className)}>{children}</div>;
}
