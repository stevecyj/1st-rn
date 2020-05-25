import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

export default function App() {
  let str =
    "Open up App.js to \n start working on your app! \n 哈囉!你好安安給虧嗎!";

  // const food = "pork";
  const [food, setFood] = useState("豬肉");
  const [count, setCount] = useState(0);
  const [validCode, setValidCode] = useState("");

  const changeFood = () => {
    setFood("牛肉");
    console.log("按到變更 food 按鈕了");
  };

  const changeCount = () => {
    setCount(count + 1);
    console.log("按到 change count 按鈕了");
  };

  const printButton = () => {
    console.log("你按到 Button 了 !!!");
  };

  const printHighlight = () => {
    console.log("你按到 Highlight 了 !!!");
  };

  const printOpacity = () => {
    console.log("你按到 Opacity 了 !!!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{str}</Text>
      <Text style={[styles.mainText, styles.commandText]}>{food}</Text>
      <Text style={[styles.mainText, styles.commandText]}>
        計數器數到 {count}
      </Text>

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setValidCode(text)}
        value={validCode}
        maxLength={4}
        placeholder="請輸入 email"
        keyboardType={"email-address"}
      />

      <Button title="變更 food" onPress={() => changeFood()} />
      <Button title="change count" onPress={() => changeCount()} />
      <View style={styles.btnBkg}>
        <Button title="第二顆按鈕" onPress={() => printButton()} />
      </View>

      <TouchableHighlight
        style={styles.highlight}
        onPress={() => printHighlight()}
      >
        <Text>按鈕 TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableOpacity style={styles.opacity} onPress={() => printOpacity()}>
        <Text>按鈕 TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 20,
    color: "blue",
    textAlign: "center",
  },
  commandText: { color: "chocolate" },
  textInput: {
    height: 50,
    width: 300,
    borderRadius: 0,
    borderColor: "darkgray",
    borderWidth: 5,
    backgroundColor: "gray",
    color: "white",
    fontSize: 28,
    textAlign: "center",
  },
  btnBkg: {
    backgroundColor: "#00aeef",
    borderRadius: 5,
    width: 300,
    height: 30,
    borderColor: "red",
  },
  highlight: { width: 200, height: 50, backgroundColor: "yellowgreen" },
  opacity: { width: 200, height: 50, backgroundColor: "peru" },
});
