import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your Course Goal!' onChangeText={props.goalInputHandler} />
      <Button title='Add Goal' onPress={props.addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
