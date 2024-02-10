import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ onRestart, userChoice, guessCount }) => {
  return (
    <View style={styles.screen}>
      <Title title='Game Over!' />
      <View style={styles.imageWrapper}>
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
        {/* <PrimaryButton onPress={() => {}}>
          <Text>Exit Game</Text>
        </PrimaryButton> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  imageWrapper: {
    borderRadius: 150,
    height: 300,
    width: 300,
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
