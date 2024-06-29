import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [carneBovina, setCarneBovina] = useState(0);
  const [frango, setFrango] = useState(0);
  const [linguica, setLinguica] = useState(0);
  const [refrigerante, setRefrigerante] = useState(0);
  const [cerveja, setCerveja] = useState(0);

  const calcular = () => {
    // Lógica de cálculo aqui
    // Exemplo simples para ilustrar
    const totalCarneBovina = homens * 0.3 + mulheres * 0.2 + criancas * 0.1;
    const totalFrango = homens * 0.2 + mulheres * 0.15 + criancas * 0.1;
    const totalLinguica = homens * 0.1 + mulheres * 0.1 + criancas * 0.05;
    const totalRefrigerante = (homens + mulheres + criancas) * 0.5;
    const totalCerveja = homens * 0.5 + mulheres * 0.3;

    setCarneBovina(totalCarneBovina.toFixed(2));
    setFrango(totalFrango.toFixed(2));
    setLinguica(totalLinguica.toFixed(2));
    setRefrigerante(totalRefrigerante.toFixed(2));
    setCerveja(totalCerveja.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Churrasco</Text>
      <View style={styles.inputPessoa}>
        <Text>Homens:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={homens.toString()}
          onChangeText={(text) => setHomens(parseInt(text))}
        />
      </View>
      <View style={styles.inputPessoa}>
        <Text>Mulheres:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={mulheres.toString()}
          onChangeText={(text) => setMulheres(parseInt(text))}
        />
      </View>
      <View style={styles.inputPessoa}>
        <Text>Crianças:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={criancas.toString()}
          onChangeText={(text) => setCriancas(parseInt(text))}
        />
      </View>
      <Button title="Calcular" onPress={calcular} />

      <View style={styles.resultado}>
        <Text style={styles.subtitle}>Quantidade de itens a serem comprados:</Text>
        <Text>{carneBovina} Kg de Carne Bovina</Text>
        <Text>{frango} Kg de Frango</Text>
        <Text>{linguica} Kg de Linguiça</Text>
        <Text>{refrigerante} L de Refrigerante</Text>
        <Text>{cerveja} L de Cerveja</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputPessoa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    flex: 1,
    marginLeft: 10,
  },
  resultado: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
