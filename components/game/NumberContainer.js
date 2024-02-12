import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  const { width, height } = useWindowDimensions();

  const paddingDistance = height < 380 ? 12 : 20;

  return (
    <View
      style={[
        styles.container,
        { padding: paddingDistance, margin: paddingDistance },
      ]}
    >
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accentColor,
    borderRadius: 10,
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
