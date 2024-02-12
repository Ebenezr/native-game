import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const ListItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.white,
    borderWidth: 2,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Colors.accentColor,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4,
  },
  itemText: {
    fontSize: 18,
  },
});

export default ListItem;
