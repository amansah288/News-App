import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({ navigation, txt, vl, OnCht, BdrSt,PlcTxt }) {
  let BrSty = BdrSt ? "red" : "black";
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ color: "#4E4B66" }}>{txt}</Text>
      <TextInput
        style={[styles.container, { borderColor: BrSty,backgroundColor:BdrSt ? "#FFEBEB":"white" }]}
        value={vl}
        onChangeText={OnCht}
        placeholder={PlcTxt}
      />
      {BdrSt ? (
        <View style={{flexDirection:'row'}}>
          <Image
            source={require("../Images/InvSgn.png")}
            style={{ height: 12, width: 12, marginTop: 3 }}
          />
          <Text style={{ color: "red", fontSize: 12 }}> Invalid Username</Text>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    width: 300,
    marginTop: 5,
    height: 48,
  },
});
