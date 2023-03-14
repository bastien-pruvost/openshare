import { cn } from '../classnames';
import { describe, it, expect } from 'vitest';

describe('cn', () => {
  it('should return an empty string if no arguments are provided', () => {
    expect(cn()).toBe('');
  });

  it('should return a single class name when passed a string', () => {
    const className = 'my-class';
    expect(cn(className)).toBe(className);
  });

  it('should concatenate multiple class names when passed multiple strings', () => {
    const className1 = 'my-class-1';
    const className2 = 'my-class-2';
    const expectedClassName = `${className1} ${className2}`;
    expect(cn(className1, className2)).toBe(expectedClassName);
  });

  it('should concatenate multiple class names when passed an array of strings', () => {
    const classNames = ['my-class-1', 'my-class-2'];
    const expectedClassName = classNames.join(' ');
    expect(cn(classNames)).toBe(expectedClassName);
  });
});
