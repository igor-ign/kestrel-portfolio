import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    return <img {...props} />;
  },
}));

describe('Header rendering and accessibility', () => {
  it('renders a header element with correct background color', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header.className).toContain('bg-[#0E0C0A]');
  });

  it('displays the company name "KESTREL"', () => {
    render(<Header />);
    expect(screen.getByText('KESTREL')).toBeInTheDocument();
  });

  it('renders company logo with /kestrel.svg src', () => {
    render(<Header />);
    const logo = screen.getByAltText('Kestrel logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/kestrel.svg');
  });

  it('renders a nav element with an aria-label attribute', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });

  it('renders all navigation links on desktop viewport', () => {
    render(<Header />);
    const expectedLinks = ['Services', 'Process', 'Work', 'About', 'Contact'];
    expectedLinks.forEach((linkText) => {
      expect(screen.getByRole('link', { name: linkText })).toBeInTheDocument();
    });
  });

  it('renders "Start a project" button with correct styling', () => {
    render(<Header />);
    const ctaLinks = screen.getAllByRole('link', { name: 'Start a project' });
    const desktopCta = ctaLinks[0];
    expect(desktopCta).toBeInTheDocument();
    expect(desktopCta.className).toContain('from-[#C9A84C]');
    expect(desktopCta.className).toContain('text-[#0E0C0A]');
  });

  it('interactive elements are keyboard accessible with tab', () => {
    render(<Header />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).not.toHaveAttribute('tabindex', '-1');
    });

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => {
      expect(button).not.toHaveAttribute('tabindex', '-1');
    });
  });

  it('hamburger toggle button has an accessible name', () => {
    render(<Header />);
    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
