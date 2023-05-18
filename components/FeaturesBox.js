import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const FeaturesBox = (props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <View style={styles.mainContainer}>
          <Image source={props.image} style={styles.featureImage} />
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FeaturesBox;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    height: 180,
    width: 150,
    backgroundColor: "#F1F5FF",
    paddingHorizontal: 15,
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "flex-start",
    gap: 5,
  },
  featureImage: { paddingVertical: 40 },
  title: { fontWeight: "bold" },
  subtitle: { color: "#00A4C4", fontSize: 13 },
});
