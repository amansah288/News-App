import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./LoginScreen";
import HomeScreem from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import BookmarkScreen from "./BookmarkScreen";
import ProfileScreen from "./ProfileScreen";
import Foundation from "@expo/vector-icons/Foundation";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import TrendingNews from "./TrendingNews";
import NewsDetailsScr from "./NewsDetailsScr";
import AllNews from "./AllNews";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MenuScreen({ navigation }) {
  function AllScreen({ navigation }) {
    return (
      <Tab.Navigator screenOptions={{ tabBarActiveTintColor:"#1877F2",headerShown:false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreem}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Foundation name="home" size={24} color="#1877F2" />
              ) : (
                <Octicons name="home" size={20} color="black" />
              ),
              
          }}
        />
        <Tab.Screen name="Explore" component={ExploreScreen} options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="explore" size={24} color="#1877F2" />
              ) : (
                <Image source={require('../component/Images/Expl.png')} style={{height:24,width:24}}/>
              ),
          }} />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="bookmark" size={24} color="#1877F2" />
              ) : (
                <FontAwesome name="bookmark-o" size={24} color="black" />
              ),
          }} />
        <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#1877F2" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="All" component={AllScreen} />
        <Stack.Screen name="Trending" component={TrendingNews} />
        <Stack.Screen name="NewsDetails" component={NewsDetailsScr} />
        <Stack.Screen name="AllNews" component={AllNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
