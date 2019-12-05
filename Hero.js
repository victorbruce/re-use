import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import sunset from './images/sunset.jpg';
import legon from './images/legon.jpg';

const Hero = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        imageStyle={{borderRadius: 10}} 
        source={legon} 
        style={{width: '100%', height: 250}}>
          <LinearGradient style={styles.gradient} start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}>
            <Text style={styles.heroText}>The premium University of Ghana.</Text>
          </LinearGradient>
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
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingLeft: 15,
    paddingBottom: 20
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
    flexDirection: 'row'
  }
})

export default Hero;