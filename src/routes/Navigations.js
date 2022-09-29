import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/login';
import Panel from '../components/panel';
import Registro from '../components/register';
import Inputs from '../components/inputsLogin';
const Stack = createStackNavigator();
const Navigations = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator InitialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Panel" component={Panel} />
            <Stack.Screen name="Inputs" screenOptions={{headerShown: false}} component={Inputs} />
            <Stack.Screen name="Registro" screenOptions={{headerShown: false}} component={Registro} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

export default Navigations;