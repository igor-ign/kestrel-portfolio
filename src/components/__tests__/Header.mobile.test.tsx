import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Header } from '../Header';

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    return <img {...props} />;
  },
}));

vi.mock('@phosphor-icons/react', () => ({
  List: (props: Record<string, unknown>) => (
    <svg data-testid="list-icon" {...props} />
  ),
  X: (props: Record<string, unknown>) => (
    <svg data-testid="x-icon" {...props} />
  ),
}));

describe('Header mobile menu behavior', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the hamburger toggle button', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', {
      name: 'Toggle navigation menu',
    });

    expect(toggleButton).toBeInTheDocument();
  });

  it('should have aria-expanded set to false initially', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', {
      name: 'Toggle navigation menu',
    });

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('should open mobile menu and set aria-expanded to true when toggle is clicked', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', {
      name: 'Toggle navigation menu',
    });

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument();
  });

  it('should close mobile menu and set aria-expanded to false when toggle is clicked again', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', {
      name: 'Toggle navigation menu',
    });

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument();
  });

  it('should close mobile menu when a nav link is clicked', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', {
      name: 'Toggle navigation menu',
    });

    fireEvent.click(toggleButton);

    const mobileNav = screen.getByLabelText('Mobile navigation');
    const navLink = mobileNav.querySelector('a[href="#about"]') as HTMLElement;

    fireEvent.click(navLink);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument();
  });

  it('should move focus to first nav link when menu opens', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', {
      name: 'Toggle navigation menu',
    });

    fireEvent.click(toggleButton);

    const mobileNav = screen.getByLabelText('Mobile navigation');
    const firstNavLink = mobileNav.querySelector('a[href="#about"]') as HTMLElement;

    expect(document.activeElement).toBe(firstNavLink);
  });

  it('should return focus to toggle button when menu closes', () => {
    render(<Header />);

    const toggleButton = screen.getByRole('button', {
      name: 'Toggle navigation menu',
    });

    fireEvent.click(toggleButton);
    fireEvent.click(toggleButton);

    expect(document.activeElement).toBe(toggleButton);
  });
});
