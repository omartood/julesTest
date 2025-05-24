import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page'; // Adjust path if necessary

describe('Home Page', () => {
  it('should render the main heading', () => {
    render(<Home />);
    // Using a regex to be flexible about exact wording or case in the future,
    // but still targeting the main welcome message.
    const heading = screen.getByRole('heading', {
      name: /welcome to my personal landing page/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
