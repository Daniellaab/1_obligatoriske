import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  //hente vejrdata fra API'en, når komponenten først indlæses
  useEffect(() => {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=55.6759&longitude=12.5655&hourly=apparent_temperature&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FBerlin';

    //foretage API-anmodninger
    axios
      .get(apiUrl)
      .then((response) => {
        //gemme vejrdata
        setWeatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Error fetching weather data</Text>
      </View>
    );
  }

  const dailyForecast = weatherData.daily || {};
  const currentWeather = weatherData.current_weather || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vejret i København</Text>
      <Text style={styles.description}>
        Maksimum temperatur: {dailyForecast.temperature_2m_max[0]}°C
      </Text>
      <Text style={styles.description}>
        Minimum temperatur: {dailyForecast.temperature_2m_min[0]}°C
      </Text>
      <Text style={styles.description}>
        Den nuværende temperatur: {currentWeather.temperature}°C
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default WeatherScreen;