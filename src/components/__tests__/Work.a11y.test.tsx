import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Work } from '../Work';

expect.extend(toHaveNoViolations);

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    return <img {...props} />;
  },
}));

describe('Work accessibility audit', () => {
  it('should have section with aria-labelledby referencing the heading', () => {
    render(<Work />);
    const section = document.getElementById('work');
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute('aria-labelledby', 'work-heading');

    const heading = document.getElementById('work-heading');
    expect(heading).toBeInTheDocument();
    expect(heading?.tagName).toBe('H2');
  });

  it('should use semantic article elements for cards', () => {
    render(<Work />);
    const section = document.getElementById('work');
    const articles = section?.querySelectorAll('article');
    expect(articles).toHaveLength(3);
  });

  it('should have visible focus ring classes on card links', () => {
    render(<Work />);
    const section = document.getElementById('work');
    const links = section?.querySelectorAll('a');

    links?.forEach((link) => {
      expect(link.className).toContain('focus-visible:ring-2');
      expect(link.className).toContain('focus-visible:ring-[#C9A84C]');
      expect(link.className).toContain('focus-visible:outline-none');
    });
  });

  it('should have no WCAG AA violations', async () => {
    const { container } = render(<Work />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
