import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// Components
import Header from './Header';
import Hero from './Hero';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Hero />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 5,
    marginTop: 30
  }
})

export default App;