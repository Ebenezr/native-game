import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accentColor,
    padding: deviceWidth < 380 ? 12 : 20,
    borderRadius: 10,
    margin: deviceWidth < 380 ? 12 : 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accentColor,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontWeight: 'bold',
  },
});

export default NumberContainer;
