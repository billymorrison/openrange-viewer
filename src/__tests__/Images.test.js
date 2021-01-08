import { render } from '@testing-library/react';
import Images from '../components/Images';

const images = [
    "https://ik.imagekit.io/pimberly/5c59ada1cea10b002eb87a89/6ea0078f/5fa403d991a9d54f24000c2c/ThinkVision.jpg",
    "https://ik.imagekit.io/pimberly/5c59ada1cea10b002eb87a89/6ea0078f/5fa403d991a9d54f24000c2b/additional_0.jpg",
    "https://ik.imagekit.io/pimberly/5c59ada1cea10b002eb87a89/6ea0078f/5fa403d991a9d54f24000c2a/additional_1.jpg"
];

test('renders an image component', () => {
  const { getByTestId } = render(<Images images={images}/>);

  expect( getByTestId("main-image") ).toBeInTheDocument();
});
