import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accentColor,
    padding: 24,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accentColor,
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default NumberContainer;
