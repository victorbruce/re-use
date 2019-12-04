import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Basic Demo UI</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff7550',
    borderRadius: 8,
    elevation: 5
  },
  headerText: {
    textAlign: 'center',
    padding: 15,
    fontSize: 15,
    color: '#fff'
  }
})

export default Header;