import renderer from 'react-test-renderer'
import App from '../components/App';

test('renders the app', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});
