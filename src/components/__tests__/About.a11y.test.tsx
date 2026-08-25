import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { About } from '../About';

expect.extend(toHaveNoViolations);

describe('About accessibility audit', () => {
  it('should have logo image with descriptive alt text', () => {
    render(<About />);
    const section = document.getElementById('about');
    const img = section?.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img?.getAttribute('alt')).toBe('Kestrel Systems logo');
  });

  it('should have decorative corner brackets hidden from assistive technology', () => {
    render(<About />);
    const section = document.getElementById('about');
    const hiddenElements = section?.querySelectorAll('[aria-hidden="true"]');
    expect(hiddenElements?.length).toBeGreaterThanOrEqual(4);
  });

  it('should have section element with id="about"', () => {
    render(<About />);
    const section = document.getElementById('about');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('should have no WCAG AA violations', async () => {
    const { container } = render(<About />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
