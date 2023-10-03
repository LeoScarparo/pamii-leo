import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Cachorro1 from './assets/cachorro1v.png';

function TelaEsquerda() {
  return (
    <View style={styles.all}>

      <Text style={styles.text}>
        Você chegou em casa, onde seu doguinho ansiosamente te espera...
      </Text>

      <Image
        source = {Cachorro1}
        style = {StyleSheet.imagemdog}
      />

      <Text style={[styles.text, styles.parabuains]}>
        Parabéns!!!
      </Text>

      <Text style={styles.text}>
        Final feliz desbloqueado ;)
      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
 
  all: {
      alignItems: 'center',
      backgroundColor: '#e6e6eb'
    },

  text: {
    fontSize: 24,
    color: '#020212'
  },

  parabuains: {
    color: '#070782',
  },

 

});

export default TelaEsquerda;
