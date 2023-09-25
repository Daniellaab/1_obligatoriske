//Her importeres de nødvendige React Native-komponenter, nemlig View, Text, og StyleSheet, samt React selv.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lidt om os, Pakkelister</Text>
      <Text style={styles.description}>
        Vi er en lille virksomhed som elsker at lave pakkelister og derfor har vi skabt denne applikation. Pak løs her!
      </Text>
      <Text style={styles.description}>
        De bedste hilsner, teamet fra Pakkelister.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default AboutScreen;
