import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState({});
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal({ key: Math.random().toString(), text: enteredText });
  }
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoal]);
  }
  function deleteGoalHandler(id) {
    console.log(`in delete. id: ${id}`);
    setCourseGoals(currentCourseGoals => {
      const newGoals = currentCourseGoals.filter(goal => goal.key !== id);
      console.log(newGoals);
      return newGoals;
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} id={itemData.item.key} deleteGoalHandler={deleteGoalHandler} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
