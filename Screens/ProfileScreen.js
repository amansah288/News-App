import { Image, StyleSheet, Text, View } from "react-native";
import PreButn from "../component/UI/PreButn";
import Input from "../component/UI/Input";

export default function ProfileScreen({ navigation }) {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        flexDirection: "column",
      }}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: "row",marginRight:100 }}>
          <Image
            source={require("../component/Images/BackArrow.png")}
            style={styles.BcImg}
          />
          <Text style={styles.txtSty}>Fill your Profile</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 24 }}>
          <Image
            style={{
              height: 140,
              width: 140,
              borderRadius: 100,
              backgroundColor: "grey",
            }}
          />
        </View>

        <Input txt={"Username"} />
        <Input txt={"Full Name"} />
        <Input txt={"Email Address"} />
        <Input txt={"Pnone Number"} />

        <View style={{marginTop:30,alignItems:'center'}}>
            <PreButn txt={"Next"} />
        </View>
        
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 50,
    backgroundColor: "white",
    flexDirection:'column',
    alignItems:'center'
  },
  BcImg: {
    height: 24,
    width: 24,
  },
  txtSty: {
    height: 24,
    width: 120,
    fontWeight: "bold",
    marginLeft: 100,
  },
});
