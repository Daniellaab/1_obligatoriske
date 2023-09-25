import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

function MyTodoListsScreen({ route }) {
  //Håndtering af rute-parametre
  //Komponenten modtager rute-parametre fra navigationen 
  const { todoLists } = route.params;
  const [renderedTodoLists, setRenderedTodoLists] = useState([]);

  //Her oprettes en tilstandsvariabel renderedTodoLists, 
  //som vil blive brugt til at gemme de opgaver, der skal vises på skærmen
  useEffect(() => {
    setRenderedTodoLists(todoLists);
  }, [todoLists]);
  // useEffect-hooket bruges til at lytte efter ændringer i todoLists og opdatere renderedTodoLists i overensstemmelse hermed


  //Funktion til at rendere hvert punkt
  const renderItem = ({ item }) => (
    <View style={styles.todoCard}>
      <Text style={styles.todoText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Min pakkeliste</Text>
      <FlatList
        data={renderedTodoLists}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  todoCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
  },
});

export default MyTodoListsScreen;
