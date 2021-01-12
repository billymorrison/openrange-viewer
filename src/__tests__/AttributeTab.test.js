import { render } from '@testing-library/react';
import Attributes from '../components/Attributes';

test('renders an attribute tab', () => {
  const { getByTestId } = render(<Attributes />);
  
  expect(getByTestId("attribute-tab")).toBeInTheDocument();
});