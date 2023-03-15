import type { ReactNode } from 'react';
import { cn } from 'src/lib/utils/classnames';
import styles from './wrapper.module.scss';

interface WrapperProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export function Wrapper({ children, className, size = 'xl' }: WrapperProps) {
  return <div className={cn(styles.wrapper, styles[size], className)}>{children}</div>;
}
