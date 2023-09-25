import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import WeatherScreen from './components/WeatherScreen';
import CreateTodoScreen from './components/CreateTodoScreen';
import MyTodoListsScreen from './components/MyTodoListsScreen';
import ShareTodoListScreen from './components/ShareTodoListScreen';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="CreateTodo" component={CreateTodoScreen} />
        <Stack.Screen name="MyTodoLists" component={MyTodoListsScreen} />
        <Stack.Screen name="ShareTodoList" component={ShareTodoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;