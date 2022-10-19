import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/routes/Navigations';
const App = () => {

  return (
      <View style={styles.container}>
        <NavigationContainer>
          <Navigations/>
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
