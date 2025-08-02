import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 24
  }
})