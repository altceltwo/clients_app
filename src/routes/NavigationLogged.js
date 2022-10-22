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

    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Inicio') {
          iconName = focused ? 'home-outline' : 'home-outline';

        } else if (route.name === 'Estado de Cuenta') {
          iconName = focused ? 'document-text-outline' : 'document-text-outline';
        }else if (route.name === 'Recargas') {
          iconName = focused ? 'cash-outline' : 'cash-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#4923F5',
      tabBarInactiveTintColor: 'black',
    })}
  >
    <Tab.Screen options={{
      headerTintColor: 'red',
      headerTitle: (props) => <LogoTitle {...props} />,
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('userProfile')}><Text style={{color:'black', marginRight:30}}>UserName</Text></Pressable>
      ),
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
      }
    }} name="Inicio" component={Panel} />
    <Tab.Screen name="Estado de Cuenta" component={EstadoCuenta} />
    <Tab.Screen name="Recargas" component={Recargas} />
    {/* <Tab.Screen name="Perfil del Usuario" component={userProfile} /> */}
  </Tab.Navigator>
  );
};

export default NavigationsLogged;