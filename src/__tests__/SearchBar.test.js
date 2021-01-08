import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('renders an image component', () => {
    const { getByTestId } = render(<SearchBar />);
  
    expect(getByTestId("search")).toBeInTheDocument();
});