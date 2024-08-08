import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllNews from "./AllNews";
import SportsScreen from "./SportsScreen";
import PoliticsScreen from "./PoliticsScreen";
import Bussinessscreen from "./BussinessScreen";
import HealthScreen from "./HealthScreen";
import TravelScreen from "./TravelScreen";

const TopTab = createMaterialTopTabNavigator();

export default function ExploreScreen({navigation}){
    return(
        <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
            <View style={styles.container}>
        <TopTab.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarLabelStyle: { fontSize: 10 },
            tabBarItemStyle: { width: 80 },
          }}
        >
          <TopTab.Screen name="All" component={AllNews} />
          <TopTab.Screen name="Sports" component={SportsScreen} />
          <TopTab.Screen name="Plitics" component={PoliticsScreen} />
          <TopTab.Screen name="Bussiness" component={Bussinessscreen} />
          <TopTab.Screen name="Health" component={HealthScreen} />
          <TopTab.Screen name="Travel" component={TravelScreen} />
        </TopTab.Navigator>
      </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:40,
        flex: 1, 
        //paddingHorizontal: 20
    }
})