import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [num01, setNUM01] = useState('');
  const [num02, setNUM02] = useState('');

  function soma(){
    const resultado = parseFloat(num01) + parseFloat(num02);
    alert('O resultado é ' + resultado);
  }
  function subtração(){
    const resultado = parseFloat(num01) - parseFloat(num02);
    alert('O resultado é ' + resultado);
  }
  function divisão(){
    const resultado = parseFloat(num01) / parseFloat(num02);
    alert('O resultado é ' + resultado);
  }
  function multiplicação(){
    const resultado = parseFloat(num01) * parseFloat(num02);
    alert('O resultado é ' + resultado);
  }

  return (
    <View style={styles.container}>
    <ImageBackground style= {styles.imgfundo} resizeMode="cover" source={imagem}>
      <Text style={styles.paragraph}> Calculadora </Text>

      <TextInput style={styles.input} keyboardType='numeric' value={num01} onChangeText={(num01)=> setNUM01(num01)} placeholder='Digite um número'/>

      <TextInput style={styles.input} keyboardType='numeric' value={num02} onChangeText={(num02)=> setNUM02(num02)} placeholder='Digite um número'/>

      <TouchableOpacity style={styles.botao} onPress={soma}>
      <Text style={styles.textbotao}>Soma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={subtração}>
      <Text style={styles.textbotao}>Subtração</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={divisão}>
      <Text style={styles.textbotao}>Divisão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={multiplicação}>
      <Text style={styles.textbotao}>Multiplicação</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const imagem = {uri:"https://impa.br/wp-content/uploads/2018/09/aula-de-matematica.jpg"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems:'center',
  },
  paragraph: {
    backgroundColor:'#1C1C1C',
    borderRadius:10,
    color:'#DCDCDC',
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input:{
    textAlign:'center',
    backgroundColor:'#90EE90',
    borderRadius:10,
    margin:20,
    fontSize:25,
    padding:4,
  },
  botao:{
    width:150,
    alignItems:'center',
    margin:2,
    padding:10,
    borderRadius:10,
    backgroundColor:'#1C1C1C',
  },
  textbotao:{
    fontSize:18,
    color:'#DCDCDC',
  },
   imgfundo:{
    marginTop:20,
    flex: 1,
    width: 380,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
