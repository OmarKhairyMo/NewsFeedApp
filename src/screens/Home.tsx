import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import ErrorScreen from '../components/ErrorScreen';
import {HeadLightComponent} from '../components/HeadLightComponent';
import {Loader} from '../components/Loader';
import NewsListComponent from '../components/NewsListComponent';
import {SearchBar} from '../components/SearchBar';
import useOpacityAnimation from '../hook/useOpacityAnimation';
import {fontSizeStyle} from '../theme/fontStyle';
import {Spacing} from '../theme/layout';
import API from '../utils/api/apis';
const {height, width} = Dimensions.get('screen');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList); // creating Animated FlatList
export const Home = () => {
  const [newsList, setNewsList] = useState(); // the News List
  const [isLoading, setLoading] = useState(true); // handle waiting while Loading
  const [error, setError] = useState(false); // handle Bad Requests
  const [isRefershing, setRefreshing] = useState(false); // handle Bad Requests
  const {animatedHeaderStyle, scrollHandler} = useOpacityAnimation(0, 200);
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

  const onRefresh = async () => {
    setRefreshing(true);
    fetchNews();
    setRefreshing(false);
  };

  if (isLoading) {
    return <Loader animatedHeaderStyle={animatedHeaderStyle} />;
  }
  if (error) {
    return <ErrorScreen isLoading={isLoading} onPress={fetchNews} />;
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <Animated.View style={[styles.headerContainerStyle, animatedHeaderStyle]}>
        <SearchBar term="konafa" />
      </Animated.View>
      <AnimatedFlatList
        onRefresh={onRefresh}
        data={newsList}
        onScroll={scrollHandler}
        refreshing={isRefershing}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({item, index}) => <NewsListComponent item={item} />}
        ListHeaderComponent={() => (
          <View style={{paddingTop: 100}}>
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingMessage}>Most Popular</Text>
            </View>
            {/* Most Popular New */}
            <HeadLightComponent />
            <Text style={[styles.greetingMessage, {marginTop: Spacing}]}>
              Top reads of the day
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 15},
  headerContainerStyle: {
    top: 15,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: width - 50,
    alignSelf: 'center',
    zIndex: 5,
  },
  greetingContainer: {
    marginVertical: 15,
  },
  greetingMessage: {
    fontSize: fontSizeStyle.xxxl,
    fontWeight: 'bold',
    color: 'black',
  },
});
