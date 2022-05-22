import {NavigatorScreenParams} from '@react-navigation/core';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {useMemo, useState} from 'react';
import {Loader} from '../components/Loader';
import {Details} from '../screens';
import {MainTabNavigator, MainTabParamList} from './MainTabNavigator';
import {NavigationKey} from './NavigationKey';
import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

export type DetailsScreenRoot = {};
export type RootStackParamList = {
  [NavigationKey.MainTabNavigator]: NavigatorScreenParams<MainTabParamList>;
  [NavigationKey.Settings]: undefined;
  [NavigationKey.Details]: undefined;
  [NavigationKey.Loading]: undefined;
};

export const RootStack =
  createSharedElementStackNavigator<RootStackParamList>();

const rootScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootNavigator: React.FC = () => {
  const [isLoading] = useState<boolean>(false);

  const screens = useMemo<JSX.Element>(() => {
    if (isLoading) {
      return (
        <RootStack.Screen component={Loader} name={NavigationKey.Loading} />
      );
    }

    return (
      <>
        <RootStack.Screen
          name={NavigationKey.MainTabNavigator}
          component={MainTabNavigator}
        />
        <RootStack.Screen
          sharedElements={route => {
            return [{id: `${route.params.item.id}`, animation: 'fade'}];
          }}
          name={NavigationKey.Details}
          component={Details}
        />
      </>
    );
  }, [isLoading]);

  return (
    <RootStack.Navigator screenOptions={rootScreenOptions}>
      {screens}
    </RootStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);
