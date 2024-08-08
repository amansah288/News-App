import { Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen({navigation}){
    return(
        <View style={styles.container}>
            <Image source={require('../component/Images/spls.png')} style={styles.img} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
        height:50,
        width:110
    }
  });
  