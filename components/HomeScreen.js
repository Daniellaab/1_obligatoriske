import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opret din pakkeliste til din næste rejse her!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateTodo')}
        >
        <Text style={styles.buttonText}>Opret pakkeliste</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ShareTodoList')}
        >
        <Text style={styles.buttonText}>Del pakkelister</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Weather')}
      >
        <Text style={styles.buttonText}>Vejrudsigten i København</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>Læs mere om os</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.buttonText}>Her kan du kontakte os</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    marginVertical: 8,
    width: 200,
  },
});

export default HomeScreen;
