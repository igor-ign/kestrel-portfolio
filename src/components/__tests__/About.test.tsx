import { render, screen } from '@testing-library/react';
import { About } from '../About';

describe('About component', () => {
  it('should render section with id="about"', () => {
    render(<About />);
    const section = document.getElementById('about');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('should render the "ABOUT" label', () => {
    render(<About />);
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
  });

  it('should render the quote text', () => {
    render(<About />);
    expect(screen.getByText(/Small by choice\./)).toBeInTheDocument();
    expect(screen.getByText(/Not by limitation\./)).toBeInTheDocument();
  });

  it('should render all three stat values', () => {
    render(<About />);
    expect(screen.getByText('40+')).toBeInTheDocument();
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('5 yrs')).toBeInTheDocument();
  });

  it('should render all three stat labels', () => {
    render(<About />);
    expect(screen.getByText('Projects shipped')).toBeInTheDocument();
    expect(screen.getByText('Client retention')).toBeInTheDocument();
    expect(screen.getByText('Average relationship')).toBeInTheDocument();
  });

  it('should render all three body paragraphs', () => {
    render(<About />);
    expect(screen.getByText(/Kestrel was built on a single conviction/)).toBeInTheDocument();
    expect(screen.getByText(/We take on fewer clients so we can go deeper/)).toBeInTheDocument();
    expect(screen.getByText(/Quality over quantity, always/)).toBeInTheDocument();
  });

  it('should render the signature block', () => {
    render(<About />);
    expect(screen.getByText('Igor Ignácio')).toBeInTheDocument();
    expect(screen.getByText('Founder & Lead Engineer, Kestrel Systems')).toBeInTheDocument();
  });

  it('should render "EST. 2026"', () => {
    render(<About />);
    expect(screen.getByText('EST. 2026')).toBeInTheDocument();
  });
});
