import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SearchBar} from '../components/SearchBar';
import {fontSizeStyle} from '../theme/fontStyle';
import {colors} from '../theme/colors';
import {Spacing} from '../theme/layout';
import {HeadLightComponent} from '../components/HeadLightComponent';
import {NewsList} from '../utils/constants/DummyData';
import NewsListComponent from '../components/NewsListComponent';
import API from '../utils/api/apis';
import axios from 'axios';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Loader} from '../components/Loader';

const {height} = Dimensions.get('screen');

export const Home = () => {
  const [newsList, setNewsList] = useState(); // the News List
  const [isLoading, setLoading] = useState(true); // handle waiting while Loading
  const [error, setError] = useState(false); // handle Bad Requests
  console.log(isLoading, 'Loadinggg');
  // Handle Fetching News
  const fetchNews = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await axios.get(API.FETCH_NEWS);
      setNewsList(data.data.articles);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainerStyle}>
        <SearchBar term="konafa" />
      </View>
      <FlatList
        data={newsList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({item, index}) => <NewsListComponent item={item} />}
        ListHeaderComponent={() => (
          <>
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingMessage}>Most Popular</Text>
            </View>
            {/* Most Popular New */}
            <HeadLightComponent />
            <Text style={[styles.greetingMessage, {marginTop: Spacing}]}>
              Top reads of the day
            </Text>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 15},
  headerContainerStyle: {},
  greetingContainer: {
    marginVertical: 15,
  },
  greetingMessage: {
    fontSize: fontSizeStyle.xxxl,
    fontWeight: 'bold',
    color: 'black',
  },
});
