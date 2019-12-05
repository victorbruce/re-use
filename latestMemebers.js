import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Data from './data';

const LatestMembers = () => {
  const [data, setData] = useState(Data);

  const latestMembers = () => {
    return data.map(singleData => {
      return (
        <View key={singleData.id} style={styles.latestMembers}>
          <Image source={{uri: singleData.user_avatar}} style={styles.avatar} />
          <Text>{singleData.username}</Text>
        </View>
      )
    })
  }

  return (
    <View>
    <View>
      <Text style={styles.headerText}>Latest Members</Text>
    </View>
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {latestMembers()}
      </ScrollView>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a4b0be',
    marginVertical: 8,
    borderRadius: 8,
    paddingVertical: 5
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingTop: 15
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  latestMembers: {
    padding: 5,
    alignItems: 'center',
    marginHorizontal: 20
  }
})

export default LatestMembers;