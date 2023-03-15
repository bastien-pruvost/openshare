import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RootError from './error';

describe('RootError component', () => {
  const error = new Error('Intentional Test Error');
  const reset = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crash', () => {
    render(<RootError error={error} reset={reset} />);
  });

  it('should display error message', () => {
    render(<RootError error={error} reset={reset} />);
    const text = screen.getByRole('heading', { level: 3, name: /Something went wrong/ });
    expect(text).toBeTruthy();
  });

  it('should call reset function when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<RootError error={error} reset={reset} />);
    const resetErrorButton = screen.getByRole('button', { name: /Reset error/ });
    await user.click(resetErrorButton);
    expect(reset).toHaveBeenCalledTimes(1);
  });

  it('should log error to console', () => {
    const consoleSpy = vi.spyOn(console, 'error');
    render(<RootError error={error} reset={reset} />);
    expect(consoleSpy).toHaveBeenCalledWith(error);
  });
});
