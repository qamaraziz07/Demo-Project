import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Onboarding = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.heading}>Good Morning,</Text>
        <Text style={styles.subheading}>Welcome to Madarasatak</Text>
      </View>
      <Image
        source={require("../assets/images/user.png")}
        style={styles.userImage}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  heading: { color: "#4FC4D8", fontWeight: "bold", fontSize: 30 },
  subheading: { color: "#fff", fontSize: 18 },
  userImage: { borderRadius: 50, borderWidth: 2, borderColor: "white" },
});
