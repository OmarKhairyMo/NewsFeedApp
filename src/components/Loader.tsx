import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SearchBar} from './SearchBar';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useTheme} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');
const skeltonItemsEstimation: number = Math.round((height * 0.8) / 160) - 1; // to estimate how much skeleton item could fit the phone screen
const skeltonList: number[] = Array(skeltonItemsEstimation)
  .fill(null)
  .map((_, i) => i); // initialize sequenced array of the estimated length

export const Loader = () => {
  const {colors} = useTheme();
  return (
    <View
      style={[styles.screenContainer, {backgroundColor: colors.background}]}>
      <SearchBar term={'konafa'} />
      {/* Popular New */}
      <SkeletonPlaceholder
        speed={1000}
        highlightColor={colors.text}
        backgroundColor={colors.border}>
        <SkeletonPlaceholder.Item marginTop={100} marginBottom={18}>
          <View style={styles.skeletonBigCard} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      {/* List */}
      <View style={styles.marginContainer}>
        <SkeletonPlaceholder
          speed={1000}
          highlightColor={colors.text}
          backgroundColor={colors.border}>
          {skeltonList.map((item: number) => {
            return (
              <SkeletonPlaceholder.Item
                key={item}
                alignItems="center"
                justifyContent="space-between"
                marginBottom={18}>
                <View style={styles.skeletonCard} />
              </SkeletonPlaceholder.Item>
            );
          })}
        </SkeletonPlaceholder>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 14,
  },

  skeletonCard: {
    height: 160,
    width: width - width * 0.07,
    borderRadius: 14,
  },

  skeletonBigCard: {
    height: height * 0.55,
    borderRadius: 30,
    width: width - width * 0.07,
  },
  marginContainer: {
    marginTop: 14,
  },
});
