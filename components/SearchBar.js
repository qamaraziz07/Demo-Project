import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search in App"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
        <Feather
          name="search"
          size={20}
          color="grey"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: "center",
  },
  searchBar: {
    padding: 5,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#F1F5FF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: 13,
    marginHorizontal: 10,
  },
  searchIcon: { marginRight: 10 },
});
