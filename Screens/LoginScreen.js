import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../component/UI/Input";
import PreButn from "../component/UI/PreButn";
import IconBtn from "../component/UI/IconBtn";
import { useState } from "react";

export default function LoginScreen({ navigation }) {


  [EnText, SetenText] = useState("");
  [err,SetErr] = useState(false)
  const space = " ";
  console.log(EnText);

  function SubmitHandler() {
    if (EnText.length == 0) {
      Alert.alert("Enter Username", "Please enter a username");
    } else {
      let hasSpace = false;
      for (let i = 0; i < EnText.length; i++) {
        if (space.includes(EnText[i])) {
          hasSpace = true;
          break;
        }
      }
      SetErr(hasSpace);
      if (hasSpace) {
        //Alert.alert("Invalid Username", "Username contains spaces");
      }
      if(!hasSpace){
        navigation.navigate('All')
      }
    }
  }

  return (
    <View style={{backgroundColor: "#fff"}}>
      <View style={styles.container}>
      {/* Hello code */}
      <View style={{ marginTop: 50, flexDirection: "column" }}>
        <Text style={styles.Hello}>Hello</Text>
        <Text style={[styles.Hello, { color: "#1877F2" }]}>Again!</Text>
        <Text style={styles.WlcBa}>Welcome back you’ve</Text>
        <Text style={styles.WlcBa}>been missed</Text>
      </View>
      {/* Input Text */}
      <View style={{ marginTop: 40 }}>
        <Input txt="Username" vl={EnText} OnCht={(Txt) => SetenText(Txt)} BdrSt={err} />
        <Input txt="Password" PlcTxt={"********"} />
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Image
          source={require("../component/Images/image.png")}
          style={{ height: 20, width: 20 }}
        />
        <Text style={{ color: "#4E4B66" }}>Remember me</Text>
        <Text style={{ color: "#1877F2", marginLeft: 45 }}>
          Forgot the password ?
        </Text>
      </View>
      <View>
        <PreButn txt="Login" PessHndl={SubmitHandler} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text style={{ color: "#4E4B66" }}>or continue with</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <IconBtn
          txt="Facebook"
          srcs={require("../component/Images/FcImg.png")}
        />
        <IconBtn
          txt="Google"
          srcs={require("../component/Images/Glimg.png")}
          ML={20}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text>
          don’t have an account ?{" "}
          <Text style={{ color: "#1877F2" }}>Sign Up</Text>
        </Text>
      </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    //justifyContent: 'center',
    marginLeft: 30,
    height:"100%"
  },
  Hello: {
    fontWeight: "bold",
    fontSize: 40,
  },
  WlcBa: {
    color: "#4E4B66",
    fontSize: 20,
    fontWeight: "400",
  },
});
