import CheckBox from 'expo-checkbox';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CreateTodoScreen({ navigation }) {
  // Brug af useState og useEffect hooks
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const STORAGE_KEY = '@MyTodoApp:todoList';

  useEffect(() => {
    // Hente de gemte lister
    loadTodoList();
  }, []);

  //gemte opgaver hentes fra AsyncStorage ved opstart
  // loadTodoList: Henter opgaver fra AsyncStorage og opdaterer todoList-tilstanden
  const loadTodoList = async () => {
    try {
      const storedTodoList = await AsyncStorage.getItem(STORAGE_KEY);

      if (storedTodoList !== null) {
        setTodoList(JSON.parse(storedTodoList));
      }
    } catch (error) {
      console.error('Fejl ved indlæsning af liste:', error);
    }
  };

  //Tilføjer en ny opgave til todoList og gemmer den i AsyncStorage. Opretter en fejlmeddelelse, hvis input-teksten er tom.
  const addTodo = () => {
    if (todo.trim() !== '') {
      const updatedTodoList = [...todoList, { text: todo, completed: false }];
      setTodoList(updatedTodoList);
      setTodo('');

      // Save the updated to-do list to AsyncStorage
      saveTodoList(updatedTodoList);
    } else {
      Alert.alert('Fejl', 'Indtast tekst.');
    }
  };

  //Markerer en opgave som fuldført eller ufuldført.
  const toggleTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
  };

  //Sletter en opgave fra todoList og gemmer den opdaterede liste i AsyncStorage.
  const deleteTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);

    saveTodoList(updatedTodoList);
  };
    // Gemmer den aktuelle opgaveliste i AsyncStorage og navigerer til MyTodoLists
  const saveTodoList = async (updatedList) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      navigation.navigate('MyTodoLists', { todoLists: updatedList });
    } catch (error) {
      console.error('Fejl ved at gemme liste:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tilføj et punkt til din liste"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Button
        title="Tilføj punkt"
        onPress={addTodo}
        style={styles.button}
      />
      <FlatList
        data={todoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.todoItem}>
            <CheckBox
              value={item.completed}
              onValueChange={() => toggleTodo(index)}
            />
            <Text style={item.completed ? styles.completedText : styles.todoText}>
              {item.text}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTodo(index)}
            >
              <Text style={styles.deleteButtonText}>Slet</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button
        title="Se liste"
        onPress={() => {
          navigation.navigate('MyTodoLists', { todoLists: todoList });
        }}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    marginBottom: 16,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  completedText: {
    flex: 1,
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreateTodoScreen;
