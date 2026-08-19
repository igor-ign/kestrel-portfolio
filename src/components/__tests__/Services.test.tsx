import { render, screen } from '@testing-library/react';
import { Services } from '../Services';

describe('Services component', () => {
  it('should render section with id="services"', () => {
    render(<Services />);
    const section = document.getElementById('services');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('should render the title "WHAT WE DO"', () => {
    render(<Services />);
    expect(screen.getByText('WHAT WE DO')).toBeInTheDocument();
  });

  it('should render subtitle text and gradient text "every layer"', () => {
    render(<Services />);
    expect(screen.getByText(/Precision work across/)).toBeInTheDocument();
    expect(screen.getByText('every layer')).toBeInTheDocument();
  });

  it('should render all three card titles', () => {
    render(<Services />);
    expect(screen.getByText('Web Design')).toBeInTheDocument();
    expect(screen.getByText('Fullstack Development')).toBeInTheDocument();
    expect(screen.getByText('Custom Applications')).toBeInTheDocument();
  });

  it('should render card descriptions', () => {
    render(<Services />);
    expect(screen.getByText(/Interfaces that convert/)).toBeInTheDocument();
    expect(screen.getByText(/From database schema/)).toBeInTheDocument();
    expect(screen.getByText(/Off-the-shelf software/)).toBeInTheDocument();
  });

  it('should render tag pills for each card', () => {
    render(<Services />);
    expect(screen.getByText('UI/UX')).toBeInTheDocument();
    expect(screen.getByText('Prototyping')).toBeInTheDocument();
    expect(screen.getByText('Design Systems')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('SaaS')).toBeInTheDocument();
    expect(screen.getByText('Internal Tools')).toBeInTheDocument();
    expect(screen.getByText('Integrations')).toBeInTheDocument();
  });

  it('should render three icon containers', () => {
    render(<Services />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);
    articles.forEach((article) => {
      const iconContainer = article.querySelector('.h-11.w-11');
      expect(iconContainer).toBeInTheDocument();
    });
  });
});
