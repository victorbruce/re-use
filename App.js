import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
// Components
import Header from './Header';
import Hero from './Hero';
import LatestMembers from './latestMemebers';
import News from './News';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero />
      <LatestMembers />
      <News />
    </ScrollView>
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