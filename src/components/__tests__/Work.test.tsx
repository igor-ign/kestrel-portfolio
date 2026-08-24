import { render, screen } from '@testing-library/react';
import { Work } from '../Work';

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    return <img {...props} />;
  },
}));

describe('Work component', () => {
  it('should render a section with id="work"', () => {
    render(<Work />);
    const section = document.getElementById('work');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('should render SectionHeading with "SELECTED WORK", "Work that speaks", and "for itself"', () => {
    render(<Work />);
    expect(screen.getByText('SELECTED WORK')).toBeInTheDocument();
    expect(screen.getByText(/Work that speaks/)).toBeInTheDocument();
    expect(screen.getByText('for itself')).toBeInTheDocument();
  });

  it('should render exactly 3 article elements', () => {
    render(<Work />);
    const articles = screen.getAllByRole('article');
    expect(articles).toHaveLength(3);
  });

  it('should display category, title, and description for each card', () => {
    render(<Work />);

    // Meridian Finance
    expect(screen.getByText('Fullstack / Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Meridian Finance')).toBeInTheDocument();
    expect(screen.getByText(/real-time analytics dashboard/)).toBeInTheDocument();

    // Sola Health
    expect(screen.getByText('Web Design / SaaS')).toBeInTheDocument();
    expect(screen.getByText('Sola Health')).toBeInTheDocument();
    expect(screen.getByText(/patient-first wellness platform/)).toBeInTheDocument();

    // Apex Logistics
    expect(screen.getByText('Custom Application')).toBeInTheDocument();
    expect(screen.getByText('Apex Logistics')).toBeInTheDocument();
    expect(screen.getByText(/live shipment tracking/)).toBeInTheDocument();
  });

  it('should render images with non-empty alt attributes containing project names', () => {
    render(<Work />);
    const images = screen.getAllByRole('img');

    const altTexts = images.map((img) => img.getAttribute('alt'));
    expect(altTexts.some((alt) => alt?.includes('Meridian Finance'))).toBe(true);
    expect(altTexts.some((alt) => alt?.includes('Sola Health'))).toBe(true);
    expect(altTexts.some((alt) => alt?.includes('Apex Logistics'))).toBe(true);

    images.forEach((img) => {
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });

  it('should render tags for each card', () => {
    render(<Work />);

    // Meridian Finance tags
    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(screen.getByText(/Node\.js/)).toBeInTheDocument();
    expect(screen.getByText(/PostgreSQL/)).toBeInTheDocument();

    // Sola Health tags
    expect(screen.getByText(/Next\.js/)).toBeInTheDocument();
    expect(screen.getByText(/Tailwind/)).toBeInTheDocument();
    expect(screen.getByText(/Stripe/)).toBeInTheDocument();

    // Apex Logistics tags
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    expect(screen.getByText(/AWS/)).toBeInTheDocument();
    expect(screen.getByText(/Real-time/)).toBeInTheDocument();
  });
});
