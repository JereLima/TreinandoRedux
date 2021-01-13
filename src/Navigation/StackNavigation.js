import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
