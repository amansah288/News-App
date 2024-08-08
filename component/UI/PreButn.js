import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PreButn({ navigation, txt,PessHndl }) {
  return (
    <View
      style={{marginTop: 15 }}
    >
      <Pressable style={styles.PreStyle} onPress={PessHndl}  >
        <Text style={{color:'white'}}>{txt}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
 
    PreStyle: {
      backgroundColor: "#1877F2",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      width: 320,
      height: 50,
    },
  
});
