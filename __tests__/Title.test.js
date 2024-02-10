import renderer from 'react-test-renderer';
import Title from '../components/ui/Title';

describe('Title', () => {
  it('renders Title correctly', () => {
    const tree = renderer
      .create(<Title title='Test Title'>Test Children</Title>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
