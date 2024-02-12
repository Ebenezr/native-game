import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ onRestart, userChoice, guessCount }) => {
  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 : 80;
  const imageHeight = height < 380 ? 150 : 300;
  const margin = height < 380 ? 18 : 36;

  return (
    <View style={[styles.screen, { marginTop: marginTopDistance }]}>
      <Title title='Game Over!' />
      <View
        style={[
          styles.imageWrapper,
          { height: imageHeight, width: imageHeight, margin: margin },
        ]}
      >
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>

      <Text style={styles.text}>
        Your phone needed <Text style={styles.textHighlight}>{guessCount}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.textHighlight}>{userChoice}</Text>.{' '}
      </Text>
      <View style={styles.buttonWrapper}>
        <PrimaryButton onPress={onRestart}>
          <Text>New Game</Text>
        </PrimaryButton>
      </View>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingVertical: 80,
    alignItems: 'center',
  },
  imageWrapper: {
    borderRadius: deviceWidth < 380 ? 75 : 150,
    height: deviceWidth < 380 ? 150 : 300,
    width: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primaryColor,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',

    padding: 12,
    fontFamily: 'open-sans-bold',
  },
  textHighlight: {
    color: Colors.primaryColor,
    fontFamily: 'open-sans-bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
});

export default GameOverScreen;
