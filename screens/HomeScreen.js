import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import Onboarding from "../components/Onboarding";
import FeaturesBox from "../components/FeaturesBox";
import { data } from "../dummyDB";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Onboarding />
          <SearchBar />
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.subtitleView}>
            <Text style={styles.headingText}>Explore Features</Text>
            <Text style={styles.subheadingText}>View All</Text>
          </View>
          <View style={styles.boxView}>
            {data?.map((item) => {
              return (
                <FeaturesBox
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                />
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    backgroundColor: "#226CA3",
    height: 230,
    paddingTop: 70,
    paddingBottom: 20,
  },
  secondContainer: {
    backgroundColor: "#fff",
    height: 700,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  subtitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  headingText: { fontWeight: "bold", textAlign: "center" },
  subheadingText: { color: "grey", fontWeight: "bold", textAlign: "center" },
  boxView: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
});
