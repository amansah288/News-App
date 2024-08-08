import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function IconBtn({navigation,srcs,txt,ML}){
    return(
        <View style={{marginLeft:ML}}>
            <Pressable style={styles.PreSty}>
                <Image source={srcs} style={{ height: 20, width: 20,marginRight:8 }}/>
                <Text style={{color:'black'}}>{txt}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    PreSty:{
        backgroundColor:'#EEF1F4',
        flexDirection:'row',
        width:150,
        height:48,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})