// App.js

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);

  const calcular = () => {
    const carneBovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    const frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    const linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    const refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    const cerveja = (homens * 0.8) + (mulheres * 0.5);

    // Atualiza os resultados
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Churrasco</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Homens"
          keyboardType="numeric"
          onChangeText={value => setHomens(parseInt(value))}
        />
        <TextInput
          style={styles.input}
          placeholder="Mulheres"
          keyboardType="numeric"
          onChangeText={value => setMulheres(parseInt(value))}
        />
        <TextInput
          style={styles.input}
          placeholder="Crianças"
          keyboardType="numeric"
          onChangeText={value => setCriancas(parseInt(value))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <ScrollView style={styles.resultContainer}>
        {/* Resultados aqui */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  resultContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
