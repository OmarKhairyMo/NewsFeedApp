import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {Spacing} from '../theme/layout';
import {fontSizeStyle} from '../theme/fontStyle';

const {height} = Dimensions.get('screen');

export const HeadLightComponent = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}
      imageStyle={styles.headLightImageStyle}
      style={styles.headLightContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Social Security Is Rethinking How It Runs Customer Service After Covid
          19
        </Text>
      </View>

      {/* Publisher and the Date  */}
      <View style={styles.descriptionContainer}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: 33,
              width: 33,
              borderRadius: 33,
              backgroundColor: colors.lightBlue,
            }}
          />
          <Text style={styles.publisherText}>USA {'\n'}Today</Text>
        </View>
        <Text style={styles.descriptionText}>4h ago</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: Spacing + 10,
        }}>
        <Text style={styles.descriptionText}>Mary Walton</Text>
        <Text style={styles.descriptionText}>5 min Reads</Text>
        <Text style={styles.descriptionText}>200 Upvote</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headLightContainer: {
    height: height * 0.55,
    backgroundColor: 'red',
    elevation: 8,
    borderRadius: 30,
  },
  headLightImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  titleContainer: {
    widt: '100%',
    height: '70%',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: Spacing + 10,
  },
  descriptionContainer: {
    paddingHorizontal: Spacing + 10,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  publisherText: {
    fontSize: fontSizeStyle.m,
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  descriptionText: {
    color: colors.lightgray,
  },
});
