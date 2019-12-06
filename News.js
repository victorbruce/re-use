import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Image, Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Data from './data';

const News = () => {
  const [ news, setNews ] = useState(Data);

  const newsList = () => {
    return news.map(singleData => {
      return (
        <View key={singleData.id} style={styles.mosiacContainer}>
            <ImageBackground source={{uri: singleData.image_link}} imageStyle={{borderRadius: 8}} style={{height: 250}}>
            <LinearGradient style={styles.gradient} start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} colors={['rgba(0,0,0,.1)', 'rgba(0,0,0,1)']}>
              <Text style={styles.headlineText}>{singleData.headline}</Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      )
    })
  }

  return (
    <View >
      <View>
      <Text style={styles.headerText}>Monday</Text>
      </View>
      <View style={styles.container}>
        {newsList()}
      </View>
      <View>
        <Text style={styles.headerText}>News</Text>
      </View>

      <FlatList data={news} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({item}) => (
          <View style={styles.rowStyle}>
            <View style={styles.imageContainer}>
              <Image source={{uri: item.image_link}} style={styles.newsImage} />
            </View>
            <View style={styles.rightSideContent}>
              <Text style={styles.newsType}>{item.type}</Text>
              <Text style={styles.newsHeadline}>{item.headline}</Text>
            
              <View style={styles.avatarAndCaption}>
                <Image style={styles.avatarImage} source={{uri: item.user_avatar}} />
                <Text style={{paddingLeft: 10}}>{item.username}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    overflow: 'hidden',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mosiacContainer: {
    height: 250,
    margin: 3,
    flexBasis: '48%',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 15
  },
  mosiacBackgroundImage: {
    height: 250,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
    flexDirection: 'row'
  },
  headlineText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingLeft: 15,
    paddingBottom: 15
  }, 
  rowStyle: {
    flexDirection: 'row',
    backgroundColor: '#a4b0be',
    borderRadius: 6,
    margin: 5,
    padding: 5
  },
  imageContainer: {
    height: 120,
    width: (Dimensions.get('window').width / 3) - 4
  },
  newsImage: {
    flex: 1,
    width: null
  },
  newsType: {
    width: 90,
    backgroundColor: '#7bed9f',
    textAlign: 'center',
    borderRadius: 6,
    paddingVertical: 2
  },
  newsHeadline: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  avatarImage: {
    height: 24,
    width: 24,
    borderRadius: 12
  },
  rightSideContent: {
    paddingLeft: 8,
    width: (Dimensions.get('window').width / 1.5)
  },
  avatarAndCaption: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingTop: 15
  }
})

export default News;