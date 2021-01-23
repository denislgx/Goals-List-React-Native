import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';

const GoalInput = ({ onAddGoal, onCancel, modalDisplay }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const onAddGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={modalDisplay} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="New Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonAdd}>
            <Button title="Add" color="white" onPress={onAddGoalHandler} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancel}>
            <Button title="Cancel" color="white" onPress={onCancel} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonAdd: {
    width: '40%',
    borderRadius: 10,
    backgroundColor: 'blue',
  },
  buttonCancel: {
    width: '40%',
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default GoalInput;
