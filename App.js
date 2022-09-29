import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/login';
import Panel from './src/components/panel';
import Registro from './src/components/register';
import Inputs from './src/components/inputsLogin';
const Stack = createNativeStackNavigator();
const App = () => {

  return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator InitialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Panel" component={Panel} />
            <Stack.Screen name="Inputs" screenOptions={{headerShown: false}} component={Inputs} />
            <Stack.Screen name="Registro" screenOptions={{headerShown: false}} component={Registro} />
          </Stack.Navigator>
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
