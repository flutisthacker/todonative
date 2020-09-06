import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import InputBar from "./InputBar";

export default class App extends React.Component {
  //Lifestyle method
  constructor() {
    super();

    this.state = {
      todoInput: "",
      todos: [
        { id: 0, title: "Take out the trash", done: false },
        { id: 1, title: "cook dinner", done: false }
      ]
    };
  }

  render() {
    const statusbar={Platform.OS == "ios"}?<View style={styles.statusbar}></View>:<View></View>;
    return (
      <View style={styles.container}>
        {statusbar}
        <Header title="Todo App" />
        <InputBar />
      </View>
    );
  }
}

const styles =StyleSheet.create({container:{flex:1,backgroundColor:"#fff"}
,statusbar:{backgroundColor:"#ffce00",height:20}
})
