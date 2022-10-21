import React, { useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
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
           
          //TODO: validacion user para mostrat bottom navigation
          //  <Tab.Navigator screenOptions={{headerShown: false}}>
          //   <Tab.Screen name="Inicio"  component={Panel} options={{
          //     tabBarIcon:()=>(
          //       <Icon name='house' size={25} color={'black'}/>
          //     )
          //   }}/>
          //   <Tab.Screen name="Estado de Cuenta" component={EstadoCuenta} />
          //   <Tab.Screen name="Recargas" component={Recargas} />
          // </Tab.Navigator> 
  );
};

export default Navigations;