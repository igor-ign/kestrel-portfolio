import { render, screen } from '@testing-library/react';
import { Process } from '../Process';

describe('Process component', () => {
  it('should render section with id="process"', () => {
    render(<Process />);
    const section = document.getElementById('process');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('should render the "HOW WE WORK" label', () => {
    render(<Process />);
    expect(screen.getByText('HOW WE WORK')).toBeInTheDocument();
  });

  it('should render heading text "From first call to" and "final deploy"', () => {
    render(<Process />);
    expect(screen.getByText(/From first call to/)).toBeInTheDocument();
    expect(screen.getByText('final deploy')).toBeInTheDocument();
  });

  it('should render all four step numbers (01, 02, 03, 04)', () => {
    render(<Process />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('should render all four step labels', () => {
    render(<Process />);
    expect(screen.getByText('Discovery')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Development')).toBeInTheDocument();
    expect(screen.getByText('Launch')).toBeInTheDocument();
  });

  it('should render all four step descriptions', () => {
    render(<Process />);
    expect(screen.getByText(/We listen before we build/)).toBeInTheDocument();
    expect(screen.getByText(/Wireframes evolve into high-fidelity prototypes/)).toBeInTheDocument();
    expect(screen.getByText(/Clean architecture, thorough testing/)).toBeInTheDocument();
    expect(screen.getByText(/Deployment, documentation, and post-launch support/)).toBeInTheDocument();
  });
});
