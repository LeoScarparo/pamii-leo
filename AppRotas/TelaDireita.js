import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import javeiro from './assets/javeiro.jpg';

function TelaDireita() {
  return (
    <View style={styles.all}>

      <Text style={styles.text}>
        Você foi sequestrado por um javeiro e forçado a programar em Java e PHP...
      </Text>

      <Image
        source = {javeiro}
        style = {StyleSheet.imagemdog}
      />

      <Text style={[styles.text, styles.sad]}>
        Muita dor e sofrimento lhe aguardam.
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
    fontSize: 23,
    color: '#020212'
  },

  sad: {
    color: '#540707',
    fontSize: 25,
  },

 

});

export default TelaDireita;