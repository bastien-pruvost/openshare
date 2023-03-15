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

  it('should concatenate multiple class names when passed an array of strings', () => {
    const classNames = ['my-class-1', 'my-class-2'];
    const expectedClassName = classNames.join(' ');

    expect(cn(classNames)).toBe(expectedClassName);
  });

  it('should concatenate multiple class names when passed multiple strings', () => {
    const className1 = 'my-class-1';
    const className2 = 'my-class-2';
    const expectedClassName = `${className1} ${className2}`;

    expect(cn(className1, className2)).toBe(expectedClassName);
  });

  it('should concatenate only class names that meet their condition', () => {
    const className1 = 'my-class-1';
    const className2 = 'my-class-2';
    const className3 = 'my-class-3';
    const className4 = 'my-class-4';
    const returnedClassName = cn(
      1 === 1 && className1,
      2 === 2 ? className2 : '',
      null && className3,
      false ? className4 : null,
    );
    const expectedClassName = `${className1} ${className2}`;

    expect(returnedClassName).toBe(expectedClassName);
  });

  it('should trim white spaces before concatenate class names', () => {
    const className1 = 'my-class-1  ';
    const className2 = '  my-class-2';
    const className3 = ' my-class-3 ';

    const expectedClassName = `${className1} ${className2} ${className3}`;

    expect(cn(className1, className2, className3)).toBe(expectedClassName);
  });
});
