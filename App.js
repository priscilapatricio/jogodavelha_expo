import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [tela,setTela] = useState('menu');

  switch(tela){
    case 'menu':
      return getTelaMenu();
    case 'jogo':
      return getTelaJogo();
    case 'ganhador':
      return getTelaGanhador();
  }

  function getTelaMenu(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" /> 
        <Text>Menu</Text>
      </View>
    );
  }

  function getTelaJogo(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" /> 
        <Text>Jogo</Text>
      </View>
    );
  }

  function getTelaGanhador(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" /> 
        <Text>Ganhador</Text>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
