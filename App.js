import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/login';
import Panel from './src/components/panel';
import Registro from './src/components/register';
import Inputs from './src/components/inputsLogin';
import { EstadoCuenta } from './src/components/estadoCuenta';
import { Recargas } from './src/components/recargas';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {

  return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator InitialRouteName="Inputs" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Panel" options={{headerStyle: {backgroundColor: '#f4511e',}}} screenOptions={{headerShown: 'UserName'}} component={Panel} />
            <Stack.Screen name="Inputs" component={Inputs} />
            <Stack.Screen name="Registro"  component={Registro} />
          </Stack.Navigator>

          {/* <Tab.Navigator>
            <Tab.Screen name="Panel"  component={Panel} />
            <Tab.Screen name="EstadoCuenta" component={EstadoCuenta} />
            <Tab.Screen name="Recargas" component={Recargas} />
          </Tab.Navigator> */}
        </NavigationContainer>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex:1
  }
});

export default App;
