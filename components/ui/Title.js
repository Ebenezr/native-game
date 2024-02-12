import { StyleSheet, Text, Platform } from 'react-native';
import Colors from '../../constants/colors';

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 1 : 2,
    borderRadius: Platform.select({ ios: 3, android: 4 }),
    borderColor: Colors.white,
    padding: 12,
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
