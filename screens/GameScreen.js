import {
  Alert,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Card from '../components/ui/Card';
import ListItem from '../components/game/ListItem';

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

const GameScreen = ({ userChoice, onGameOver, countGuesses }) => {
  const { width, height } = useWindowDimensions();
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver();
    }
  }, [currentGuess, countGuesses, userChoice, onGameOver]);

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
    setRounds((prevRounds) => [newRndNumber, ...prevRounds]);

    countGuesses((prevCount) => prevCount + 1);
  };

  const guessRoundsLength = rounds.length;

  const marginTopDistance = height < 380 ? 30 : 80;

  return (
    <ScrollView style={styles.screen}>
      <View style={[styles.container, { marginTop: marginTopDistance }]}>
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
        <View style={styles.listWrapper}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={rounds}
            renderItem={({ item, index }) => (
              <ListItem roundNumber={guessRoundsLength - index} guess={item} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingVertical: 80,
    alignItems: 'center',
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
  listWrapper: {
    marginVertical: 20,
    padding: 20,
    flex: 1,
  },
  listItem: {
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    width: '100%',
  },
});

export default GameScreen;
