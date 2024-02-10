import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '../components/ui/Card';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver();
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess" />
      <Card title='Select higher or lower'>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonWrapper}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <AntDesign name='minuscircle' size={24} color='white' />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <AntDesign name='pluscircle' size={24} color='white' />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  screen: {
    flex: 1,
    padding: 44,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
});

export default GameScreen;
