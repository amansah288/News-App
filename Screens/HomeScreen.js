import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllNews from "./AllNews";
import SportsScreen from "./SportsScreen";
import PoliticsScreen from "./PoliticsScreen";
import Bussinessscreen from "./BussinessScreen";
import HealthScreen from "./HealthScreen";
import TravelScreen from "./TravelScreen";

const TopTab = createMaterialTopTabNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {/* Icon & notification */}
        <View style={styles.headerContainer}>
          <Image
            source={require("../component/Images/spls.png")}
            style={styles.logo}
          />
          <Image
            source={require("../component/Images/Notific.png")}
            style={styles.notificationIcon}
          />
        </View>

        {/* Search bar */}
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search" style={styles.searchInput} />
          <Image
            source={require("../component/Images/Filter.png")}
            style={styles.filterIcon}
          />
        </View>

        {/* Scrollable content */}
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Trending & see all */}
          <View style={styles.trendingContainer}>
            <Text style={styles.sectionTitle}>Trending</Text>
            <Pressable onPress={()=> navigation.navigate("Trending")}>
              <Text style={styles.seeAll}>see all</Text>
            </Pressable>
            
          </View>

          {/* Main banner news or CARD */}
          <View style={styles.bannerContainer}>
            <Image
              source={require("../component/Images/Ship.png")}
              style={styles.bannerImage}
            />
            <Text style={styles.sectionSubtitle}>Europe</Text>
            <Text style={styles.bannerTitle}>
              Russian warship: Moskva sinks in Black Sea
            </Text>
            <View style={styles.bannerInfoContainer}>
              <Image
                style={styles.newsSourceLogo}
                source={require("../component/Images/BBC.png")}
              />
              <Text style={styles.newsSource}>BBC News</Text>
              <Image
                style={styles.timeAgoIcon}
                source={require("../component/Images/Ago.png")}
              />
              <Text style={styles.timeAgo}>4h ago</Text>
              <Image
                style={styles.commentIcon}
                source={require("../component/Images/Alco.png")}
              />
            </View>
          </View>

          {/* Latest & see all */}
          <View style={styles.latestContainer}>
            <Text style={styles.sectionTitle}>Latest</Text>
            <Pressable onPress={()=> navigation.navigate("Explore")}>
              <Text style={styles.seeAll}>see all</Text>
            </Pressable>
            
          </View>
        </ScrollView>
      </View>

      {/* Top Tab Navigator */}
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    height: 30,
    width: 99,
  },
  notificationIcon: {
    height: 40,
    width: 40,
  },
  searchContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: 48,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  filterIcon: {
    height: 24,
    width: 24,
    marginRight: 10,
  },
  scrollContainer: {
    marginTop: 10,
  },
  trendingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: "black",
    fontWeight: "bold",
  },
  seeAll: {
    color: "#4E4B66",
    fontSize: 14,
  },
  bannerContainer: {
    marginTop: 10,
  },
  bannerImage: {
    width: "100%",
    height: 183,
    borderRadius: 10,
  },
  sectionSubtitle: {
    color: "#4E4B66",
    marginTop: 5,
  },
  bannerTitle: {
    fontWeight: "bold",
  },
  bannerInfoContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  newsSourceLogo: {
    height: 20,
    width: 20,
  },
  newsSource: {
    marginLeft: 2,
    fontWeight: "bold",
  },
  timeAgoIcon: {
    height: 14,
    width: 14,
    marginLeft: 15,
  },
  timeAgo: {
    marginLeft: 2,
    color: "#4E4B66",
  },
  commentIcon: {
    height: 14,
    width: 14,
    marginLeft: 125,
  },
  latestContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
