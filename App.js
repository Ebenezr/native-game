import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [startNewGame, setStartNewGame] = useState(false);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onRestart = () => {
    setStartNewGame(true);
  };

  const onGameOver = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} onGameOver={onGameOver} />;
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen onRestart={onRestart} />;
  }

  if (startNewGame) {
    screen = <StartGameScreen onStartGame={startGameHandler} />;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary100, Colors.accentColor]}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.15,
  },
});
