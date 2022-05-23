import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useTheme} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {TabIcon} from '../components/TabIcon';
import {Home, Settings} from '../screens';
import {colors} from '../theme/colors';
import {NavigationKey} from './NavigationKey';
import {RootStackParamList} from './RootNavigator';

import React from 'react';

export type MainTabParamList = {
  [NavigationKey.Home]: undefined;
  [NavigationKey.Settings]: undefined;
};

//if we need to take navigation prop and use it in this componennt
export type MainTabScreenProps = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, NavigationKey.MainTabNavigator>,
  BottomTabScreenProps<MainTabParamList>
>;

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC<MainTabScreenProps> = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: props => <TabIcon {...props} route={route} />,
        tabBarActiveTintColor: colors.background,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [styles.tabBar, {backgroundColor: colors.text}],
      })}
      initialRouteName={NavigationKey.Home}>
      <Tab.Screen name={NavigationKey.Home} component={Home} />
      <Tab.Screen name={NavigationKey.Settings} component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    borderTopWidth: 0,
  },
});
