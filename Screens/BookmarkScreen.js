import { StyleSheet, Text, View } from "react-native";

export default function BookmarkScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>BookMark Screen</Text>
      <Text style={{fontWeight:'bold'}}>Currently this function not available</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})