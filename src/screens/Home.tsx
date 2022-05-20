import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SearchBar} from '../components/SearchBar';
import {fontSizeStyle} from '../theme/fontStyle';
import {colors} from '../theme/colors';
import {Spacing} from '../theme/layout';
import {HeadLightComponent} from '../components/HeadLightComponent';

const {height} = Dimensions.get('screen');
export const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainerStyle}>
        <SearchBar term="konafa" />
      </View>
      {/* Greeting Message */}
      {/* <View style={styles.greetingContainer}>
        <Text style={styles.greetingMessage}>Good Morning</Text>
        <Text
          style={[
            styles.greetingMessage,
            {
              fontSize: fontSizeStyle.xl,
              fontWeight: '400',
            },
          ]}>
          Explore the world by one Click
        </Text>
      </View> */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingMessage}>Most Popular</Text>
      </View>

      {/* Most Popular New */}
      <HeadLightComponent />
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
