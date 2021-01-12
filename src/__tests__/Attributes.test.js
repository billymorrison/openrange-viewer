import { render } from '@testing-library/react';
import Attributes from '../components/Attributes';

test('renders the attributes', () => {
  const { getByTestId } = render(<Attributes />);
  
  expect(getByTestId("attributes")).toBeInTheDocument();
});