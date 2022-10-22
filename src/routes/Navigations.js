import React, { useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import Login from '../components/login';
import Panel from '../components/panel';
import Registro from '../components/register';
import Inputs from '../components/inputsLogin';
import { EstadoCuenta } from '../components/estadoCuenta';
import { Recargas } from '../components/recargas';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigations = () => {

  return ( 

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Panel" component={Panel} />
      <Stack.Screen name="Inputs" component={Inputs} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
};

export default Navigations;