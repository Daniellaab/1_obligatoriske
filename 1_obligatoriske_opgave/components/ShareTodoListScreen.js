import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ShareTodoListScreen({ route }) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Del pakkelister</Text>
      <View style={styles.todoCard}>
        <Button
          title="Del"
          onPress={() => {
            // Her skal man kunne videreudvikle
          }}
        />
      </View>
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

export default ShareTodoListScreen;
