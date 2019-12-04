import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import sunset from './images/sunset.jpg';

const Hero = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        imageStyle={{borderRadius: 10}} 
        source={sunset} 
        style={{width: '100%', height: 250}}>
        <Text style={styles.heroText}>Up and Awake!</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  heroText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default Hero;