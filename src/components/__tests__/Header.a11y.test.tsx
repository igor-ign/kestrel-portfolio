import { render, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Header } from '../Header';

expect.extend(toHaveNoViolations);

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => {
    const { src, alt, width, height } = props;
    return <img src={src as string} alt={alt as string} width={width as number} height={height as number} />;
  },
}));

describe('Header accessibility audit', () => {
  it('has no WCAG AA violations in desktop state', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no WCAG AA violations with mobile menu open', async () => {
    const { container, getByLabelText } = render(<Header />);

    const toggleButton = getByLabelText('Toggle navigation menu');
    fireEvent.click(toggleButton);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
