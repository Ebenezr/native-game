import { Pressable, View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={onPress}
        android_ripple={{ color: '#A0567A' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 8,
    borderRadius: 50,
    overflow: 'hidden',
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
});
