import React, { Component } from "react";

import { Platform, StyleSheet, View, Button, TextInput, ImageBackground, ScrollView, Text} from "react-native";




const image = {uri: 'https://reactjs.org/logo-og.png'};




export default class App extends Component {




  render() {

    return (

      <ScrollView  style={styles.scrollView}>

      <View style={styles.imageContainer}>

     

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      </ImageBackground>

      <View style={styles.smallContainer}>




      <Text style={styles.text}>

          SIGN IN

      </Text>

     

        <TextInput

          placeholder="Enter Your Username"

          underlineColorAndroid='transparent'

          style={styles.TextInputStyle1}

        />




        <TextInput

          placeholder="Password"

          underlineColorAndroid='transparent'

          style={styles.TextInputStyle2}

          secureTextEntry={true}

        />




        <Button

        title="Sign In"

        onPress={() => Alert.alert('Simple Button pressed')}

      />




      <Text>

          Precisa de Ajuda? Esqueceu sua senha?

      </Text>

       




      </View>

       </View>

       </ScrollView>

    );

 

  }

}




const styles = StyleSheet.create({




  imageContainer: {

    justifyContent: 'center',




  },




  image: {

    justifyContent: 'center',

    height:200,

  },




  text: {

    marginTop: -10,

    marginBottom: 25,

    margin: 15,

    fontSize: 15,

    fontWeight: 'bold',

   

  },




  smallContainer: {

    height:250,

    justifyContent: 'center',

    margin: 18,

    marginBottom: 80,

    width: 280,

    marginTop: 20,

  },




  TextInputStyle1: {

    width: 250,

    margin: 15,

    marginTop: -10,

    textAlign: 'center',

    height: 40,

    borderRadius: 10,

    borderWidth: 2,

    borderColor: '#009688',

    color: 'black',

    backgroundColor: 'white'

  },




   TextInputStyle2: {

    width: 250,

    margin: 15,

    marginTop: 5,

    textAlign: 'center',

    height: 40,

    borderRadius: 10,

    borderWidth: 2,

    borderColor: '#009688',

    color: 'black',

    backgroundColor: 'white',

    marginBottom: 40,

  },

});