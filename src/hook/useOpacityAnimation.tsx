import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default (minHeight: number, maxHeight: number) => {
  const translationY = useSharedValue<number>(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    console.log(event.contentOffset.y);
    translationY.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translationY.value,
      [minHeight, maxHeight],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  return {animatedHeaderStyle, scrollHandler};
};
