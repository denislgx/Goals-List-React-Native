import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalDisplay, setModalDisplay] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setModalDisplay(false);
  };

  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals =>
      currentGoals.filter(goal => goal.id !== goalId)
    );
  };

  const cancelGoalAddition = () => {
    setModalDisplay(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button
          color="white"
          title="Add new Goal!"
          onPress={() => setModalDisplay(true)}
        />
      </View>
      <GoalInput
        modalDisplay={modalDisplay}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddition}
      />
      <FlatList
        keyExtractor={(item, key) => item.id} // another way to tell how to set each key, if the array of objects doesn't have a key prop
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDeleteHandler={deleteGoalHandler}
            title={itemData.item.value}
            id={itemData.item.id}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60,
  },
  buttonContainer: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'blue',
  },
});
