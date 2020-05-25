import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  let str =
    "Open up App.js to \n start working on your app! \n 哈囉!你好安安給虧嗎!";

  // const food = "pork";
  const [food, setFood] = useState("豬肉");
  const [count, setCount] = useState(0);

  const changeFood = () => {
    setFood("牛肉");
    console.log("按到變更 food 按鈕了");
  };

  const changeCount = () => {
    setCount(count + 1);
    console.log("按到變更 change count 按鈕了");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{str}</Text>
      <Text style={[styles.mainText, styles.commandText]}>{food}</Text>
      <Text style={[styles.mainText, styles.commandText]}>
        計數器有{count}個
      </Text>

      <Button title="變更 food" onPress={() => changeFood()} />
      <Button title="change count" onPress={() => changeCount()} />
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
});
