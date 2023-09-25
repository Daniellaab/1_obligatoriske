import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ContactScreen = () => {
  // Åbner en URL i den enheds standardwebbrowser
  const openURL = (url) => {
    Linking.openURL(url);
  };

  // Initierer et telefonopkald til det angivne telefonnummer
  const callNumber = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  // Åbner enhedens standard-e-mailklient for at sende en e-mail til den angivne e-mailadresse
  const sendEmail = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kontaktinformationer</Text>
      <Text style={styles.text}>Email: kontakt@os_pakkelister.dk</Text>
      <Text style={styles.text}>Telefon: +45 1234</Text>
      <Text style={styles.text}>Hjemmeside: www.Pakkelister.dk</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => callNumber('1234567890')}
      >
        <Text style={styles.buttonText}>Ring</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => sendEmail('kontakt@os_pakkelister.dk')}
      >
        <Text style={styles.buttonText}>Email</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => openURL('www.Pakkelister.dk')}
      >
        <Text style={styles.buttonText}>Besøg vores hjemmeside</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactScreen;
