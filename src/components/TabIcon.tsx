import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {NavigationKey} from '../navigation/NavigationKey';

interface Props {
  focused: boolean;
  color: string;
  size: number;
  route: {name: string};
}

const iconMapper: {[key: string]: string} = {
  [NavigationKey.Home]: 'home',
  [NavigationKey.Settings]: 'setting',
};

export const TabIcon: React.FC<Props> = ({color, size, route}) => {
  return (
    <View style={[styles.tab]}>
      <Icon name={iconMapper[route.name]} color={color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: Spacing,
  },
});
