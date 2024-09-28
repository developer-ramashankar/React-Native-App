import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  };

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const renderItem = ({ item }: { item: { id: string; text: string } }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity onPress={() => removeTask(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Enter a task"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
  },
});

export default App;
