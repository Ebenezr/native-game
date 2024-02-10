import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    fontFamily: 'open-sans-bold',
  },
});

export default Title;
