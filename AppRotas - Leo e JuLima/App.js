import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPrincipal from './TelaPrincipal';
import TelaEsquerda from './TelaEsquerda';
import TelaDireita from './TelaDireita';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaPrincipal">
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="TelaEsquerda" component={TelaEsquerda} />
        <Stack.Screen name="TelaDireita" component={TelaDireita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
