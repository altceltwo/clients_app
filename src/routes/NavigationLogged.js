import React, { useState, useEffect } from 'react';
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
const NavigationsLogged = ({dato}) => {
  return (

           <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Inicio"  component={Panel} options={{
              tabBarIcon:()=>(
                <Icon name='house' size={25} color={'black'}/>
              )
            }}/>
            <Tab.Screen name="Estado de Cuenta" component={EstadoCuenta} />
            <Tab.Screen name="Recargas" component={Recargas} />
          </Tab.Navigator> 
  );
};

export default NavigationsLogged;