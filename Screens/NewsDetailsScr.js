import { Image, StyleSheet, Text, View } from "react-native";

export default function NewsDetailsScr({navigation,route}){
    const {title, description,urlToImage,content} = route.params.data
    return(
        <View style={styles.container}>
            <Text style={styles.HeaderTitle} >{title}</Text>
            <Image source={{uri:urlToImage}} style={styles.image}/>
            <Text style={{margin:10}}>{description}</Text>
            <Text style={{margin:10}}>{content}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        justifyContent:'center',
        marginTop:50,
        margin:10
    },
    HeaderTitle:{
        fontSize:20,
        color:"black",
        fontWeight:'bold'
    },
    image: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
})