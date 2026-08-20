import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Process } from '../Process';

expect.extend(toHaveNoViolations);

describe('Process accessibility audit', () => {
  it('should use correct semantic heading hierarchy', () => {
    render(<Process />);
    const section = document.getElementById('process');
    const h2 = section?.querySelector('h2');
    const h3s = section?.querySelectorAll('h3');

    expect(h2).toBeInTheDocument();
    expect(h3s).toHaveLength(4);
  });

  it('should have section element with id attribute', () => {
    render(<Process />);
    const section = document.getElementById('process');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
  });

  it('should have no WCAG AA violations', async () => {
    const { container } = render(<Process />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
