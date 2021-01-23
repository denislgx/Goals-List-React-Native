import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle, clearInput) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    clearInput('');
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, key) => item.id} // another way to tell how to set each key, if the array of objects doesn't have a key prop
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60,
  },
});
