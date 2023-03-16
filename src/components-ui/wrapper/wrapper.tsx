import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/lib/utils/classnames';
import styles from './wrapper.module.scss';

type WrapperProps = PropsWithChildren<{
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;
}>;

export const Wrapper = ({ size = 'xl', className, children }: WrapperProps) => {
  return <div className={cn(styles.wrapper, styles[size], className)}>{children}</div>;
};
