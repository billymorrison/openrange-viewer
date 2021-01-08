import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('renders a navbar', () => {
  const { getByTestId } = render(<NavBar />);
  
  expect(getByTestId("navbar")).toBeInTheDocument();
});