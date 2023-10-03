import React from 'react';
import { View, Text, Button, Image, Dimensions, StyleSheet } from 'react-native';

import Favela from './assets/favela.jpg';


const { width, height } = Dimensions.get('window');

function TelaPrincipal({ navigation }) {
  return (
    <View style={styles.all}>

        <Text style={styles.text}>
            Você está perdido em um lugar não muito bacana.
        </Text>

        <Text style={styles.text}>
            O que deseja fazer?
        </Text>

      <View style={styles.images}>

        <Image
            source = {Favela}
            style = {StyleSheet.imagemfav}
        />

      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="Ir para Esquerda"
          onPress={() => navigation.navigate('TelaEsquerda')}
          style={[styles.botao, styles.botaoEsquerda]}
        />

        <Button
          title="Ir para Direita"
          onPress={() => navigation.navigate('TelaDireita')}
          style={[styles.botao, styles.botaoDireita]}
          
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    all: {
        alignItems: 'center',
    },

    text: {
        fontSize: 27,
    },

    buttonsContainer: {
        flexDirection: 'row', 
        marginHorizontal: 30, 
        paddingVertical: 5, 
        fontSize: 18, 
    },

    botao: {
        height: 10,
        marginHorizontal: 10,
    },

  });

export default TelaPrincipal;
