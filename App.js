import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Dimensions, Platform } from 'react-native';
import axios from 'axios';

// Pokémon Background Image
const BACKGROUND_IMAGE_URL = 'https://media1.tenor.com/m/84nOHuC1lNsAAAAC/pokemon-pokemon-advanced-challenge.gif'; // Pokémon GIF

const App = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!pokemonName) {
      setError('Por favor, digite o nome de um Pokémon.');
      return;
    }

    setError('');
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemon(response.data);
    } catch (err) {
      setError('Pokémon não encontrado.');
      setPokemon(null);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: BACKGROUND_IMAGE_URL }}
        style={styles.backgroundImage}
      />
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Buscar Pokémon</Text>
          <Text style={styles.description}>
            Esse site foi designado para você fã de Pokémon buscar todos os tipos de pokémons e muito mais.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome do Pokémon"
            value={pokemonName}
            onChangeText={setPokemonName}
          />
          <Button title="Buscar" onPress={handleSearch} color="#FFCC00" />
          {error ? (
            <Text style={styles.error}>{error}</Text>
          ) : pokemon ? (
            <View style={styles.resultCard}>
              <Text style={styles.resultText}><Text style={styles.bold}>Nome:</Text> {pokemon.name}</Text>
              <Text style={styles.resultText}><Text style={styles.bold}>Tipo:</Text> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</Text>
              <Text style={styles.resultText}><Text style={styles.bold}>Altura:</Text> {pokemon.height / 10} m</Text>
              <Text style={styles.resultText}><Text style={styles.bold}>Peso:</Text> {pokemon.weight / 10} kg</Text>
              <Image
                source={{ uri: pokemon.sprites.front_default }}
                style={styles.image}
              />
            </View>
          ) : null}
        </View>
        <View style={styles.developers}>
          <Text style={styles.developerText}>Desenvolvedores:</Text>
          <Text style={styles.developerName}>Ester e David</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 6,
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333333',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  resultCard: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#e9ecef',
    marginTop: 20,
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  resultText: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.3,
    zIndex: 0,
  },
  error: {
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
  developers: {
    marginTop: 30,
    alignItems: 'center',
    zIndex: 1,
  },
  developerText: {
    fontSize: 18,
    color: '#333333',
  },
  developerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFCC00',
  },
});

export default App;
