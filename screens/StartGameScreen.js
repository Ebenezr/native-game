import {
  Alert,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';

const StartGameScreen = ({ onStartGame }) => {
  const { width, height } = useWindowDimensions();
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    onStartGame(chosenNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 80;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.container, { marginTop: marginTopDistance }]}>
          <Title title='Start a New Game' />
          <Card title='Select a number'>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCorrect={false}
              autoCapitalize='none'
              value={enteredValue}
              onChangeText={numberInputHandler}
            />

            <View style={styles.buttonWrapper}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // paddingVertical: deviceHeight < 380 ? 30 : 80,
    alignItems: 'center',
  },

  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    fontSize: 32,
    borderBottomColor: Colors.accentColor,
    borderBottomWidth: 1,
    color: Colors.accentColor,
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
});
