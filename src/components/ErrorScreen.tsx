import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../theme/colors';
import {fontSizeStyle} from '../theme/fontStyle';
import {Spacing} from '../theme/layout';

interface ErrorProps {
  onPress: () => void;
  isLoading: boolean;
}
const ErrorScreen: React.FC<ErrorProps> = ({onPress, isLoading}) => {
  return (
    <View style={styles.container}>
      <Icon name={'error'} color={colors.darkgray} size={50} />
      <Text style={styles.mainTextStyle}>Oops!</Text>
      <Text style={[styles.mainTextStyle, {fontSize: fontSizeStyle.xxl}]}>
        Something went worng.
      </Text>
      <View style={styles.marginContainer}>
        <Button
          disabled={isLoading}
          title="Retry"
          color={colors.darkgray}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTextStyle: {
    fontSize: fontSizeStyle.xxxl,
  },
  marginContainer: {
    marginTop: Spacing,
  },
});
