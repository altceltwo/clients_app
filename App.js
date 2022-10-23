import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/routes/Navigations';
import NavegationLogged from './src/routes/NavegationLogged';
import Register from './src/components/register';
const App = () => {
  // const [dato, setDato] = useState(false);
  const dato = true
  return (
    <View style={styles.container}>
    <NavigationContainer>
      { !dato ? (
        <Navigations/>
      ):(
        <NavegationLogged />
      )}
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
