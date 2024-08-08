import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";

const AllNews = ({navigation}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b2dba79c800f4ff783f3f4379c57dbe1"
        );
        const data = await response.json();
        //console.log(data);
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching the news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.articleContainer}>
      <Pressable onPress={()=> navigation.navigate("NewsDetails",{data:item})}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
        <Text style={styles.description}>{item.description}</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    
  },
  articleContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
});

export default AllNews;
