import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from "react-native";

const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add BUtton</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1
  },
  input: {
    backgroundColor: "#f3f3f3",
    fontSize: 18,
    flex: 1,
    height: 35
  }
});
export default InputBar;
