import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Services } from '../Services';

expect.extend(toHaveNoViolations);

describe('Services accessibility audit', () => {
  it('should use correct semantic heading hierarchy', () => {
    render(<Services />);
    const section = document.getElementById('services');
    const h2 = section?.querySelector('h2');
    const h3s = section?.querySelectorAll('h3');

    expect(h2).toBeInTheDocument();
    expect(h3s).toHaveLength(3);
  });

  it('should have section element with id attribute', () => {
    render(<Services />);
    const section = document.getElementById('services');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('should have no WCAG AA violations', async () => {
    const { container } = render(<Services />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
