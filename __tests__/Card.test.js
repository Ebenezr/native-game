import renderer from 'react-test-renderer';
import Card from '../components/ui/Card';

describe('Card', () => {
  it('renders Card correctly', () => {
    const tree = renderer
      .create(<Card title='Test Title'>Test Children</Card>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
