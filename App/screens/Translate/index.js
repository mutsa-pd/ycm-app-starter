import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TFCamera from '../../components/TFCamera'
import BareScreenHeader from "../../components/BareScreenHeader";
import Footer from "../../components/Footer";

export default function Translate() {
  return (
    <View style={styles.container}>
      <BareScreenHeader />
      <TFCamera />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
