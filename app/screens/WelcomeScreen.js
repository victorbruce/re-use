import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/legon.jpg")}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => console.log("sign up")} />
        <AppButton
          title="Register"
          onPress={() => console.log("Sign in")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  tagline: {
    color: "#000",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
