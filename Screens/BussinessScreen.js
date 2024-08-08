import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import axios from 'axios';
import NewsDetailsScr from './NewsDetailsScr';

const BussinesScreen = ({navigation}) => {
  const [politicsNews, setPoliticsNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'b2dba79c800f4ff783f3f4379c57dbe1';
  const country = 'in';

  function NewsPressHandler(){
    return <NewsDetailsScr/>
  }


  useEffect(() => {
    const fetchNews = async (category, setNews) => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`);
        if (response.data.status === 'ok') {
          //console.log(response.data)
          setNews(response.data.articles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchAllNews = async () => {
      setLoading(true);
      await Promise.all([
        
        fetchNews('business', setPoliticsNews)
      ]);
      setLoading(false);
    };

    fetchAllNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      
      <FlatList
        data={politicsNews}
        keyExtractor={(item, index) => 'politics-' + index.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={()=> navigation.navigate("NewsDetails",{data:item})}>
            <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
          </Pressable>
          
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  newsItem: {
    marginBottom: 20,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BussinesScreen;
