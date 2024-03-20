import React, { useState } from 'react';
import { ScrollView, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const host = "http://localhost:3000/";
  const endpoint = "hackers";
  const url = `${host}${endpoint}`;

  const [hackers, setHackers] = useState([]);

  function getHackers() {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setHackers(result);
        console.log(result)
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hackerek</Text>

      <Pressable onPress={getHackers} style={styles.button}>
        <Text style={styles.buttonText}>Lekérés</Text>
      </Pressable>

      {hackers.map((hacker, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardTitle}>{hacker.name}</Text>
          <Text style={styles.cardText}>Aliasz: {hacker.alias}</Text>
          <Text style={styles.cardText}>Születési dátum: {hacker.birthdate}</Text>
          <Text style={styles.cardText}>Nemzetiség: {hacker.nationality}</Text>
          <Text style={styles.cardText}>Email: {hacker.email}</Text>
          <Text style={styles.cardText}>Telefonszám: {hacker.phone}</Text>
          <Text style={styles.cardText}>Cím: {hacker.address}</Text>
          <Text style={styles.cardText}>Leírás: {hacker.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#dfe6e9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#00b894',
  },
  button: {
    backgroundColor: '#00b894',
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
    width: '200px',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#b2bec3',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: '75%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2d3436',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#57606f',
  },
});
