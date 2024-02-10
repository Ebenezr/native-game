import renderer from 'react-test-renderer';
import PrimaryButton from '../components/ui/PrimaryButton';

describe('PrimaryButton', () => {
  it('renders Button correctly', () => {
    const tree = renderer.create(<PrimaryButton title='Test Title' />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
