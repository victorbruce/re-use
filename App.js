import React from "react";
import { StyleSheet, View, Text } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Reuse</Text>
      <Text>Your #1 store for thrift items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffee",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
