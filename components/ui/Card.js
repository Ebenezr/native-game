import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

const Card = ({ title, children }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textStyle}>{title}</Text>
      {children}
    </View>
  );
};

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 20,
    marginTop: deviceWidth < 380 ? 18 : 40,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
