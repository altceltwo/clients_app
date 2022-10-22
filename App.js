import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/routes/Navigations';
import NavigationsLogged from './src/routes/NavigationLogged';
import Register from './src/components/register';
const App = () => {

  const [dato, setDato] = useState(false);
  return (
      <View style={styles.container}>
        <NavigationContainer>
          { !dato ? (
            <Navigations/>
          ):(
            <NavigationsLogged />
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
