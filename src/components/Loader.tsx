import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {colors as appColors} from '../theme/colors';
import {SearchBar} from './SearchBar';

interface LoaderProps {
  animatedHeaderStyle: ViewStyle;
  onChangeText: (e: string) => void;
  searchTerm: string;
}
const {height, width} = Dimensions.get('window');
const skeltonItemsEstimation: number = Math.round((height * 0.8) / 160) - 1; // to estimate how much skeleton item could fit the phone screen
const skeltonList: number[] = Array(skeltonItemsEstimation)
  .fill(null)
  .map((_, i) => i); // initialize sequenced array of the estimated length

export const Loader: React.FC<LoaderProps> = ({
  animatedHeaderStyle,
  onChangeText,
  searchTerm,
}) => {
  const {colors} = useTheme();
  return (
    <View
      style={[styles.screenContainer, {backgroundColor: colors.background}]}>
      <Animated.View style={[styles.headerContainerStyle, animatedHeaderStyle]}>
        <SearchBar onChangeText={onChangeText} term={searchTerm} />
      </Animated.View>
      {/* Popular New */}
      <SkeletonPlaceholder speed={1000} highlightColor={appColors.gray}>
        <SkeletonPlaceholder.Item marginTop={200} marginBottom={18}>
          <View style={styles.skeletonBigCard} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      {/* List */}
      <View style={styles.marginContainer}>
        <SkeletonPlaceholder speed={1000} highlightColor={appColors.gray}>
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
    paddingHorizontal: 14,
  },
  headerContainerStyle: {
    top: 15,
    backgroundColor: 'transparent',
    position: 'absolute',
    width: width - 50,
    alignSelf: 'center',
    zIndex: 5,
  },
  skeletonCard: {
    height: 110,
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
