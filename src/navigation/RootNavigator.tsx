import {NavigatorScreenParams} from '@react-navigation/core';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React, {useEffect, useMemo, useState} from 'react';
import {EventRegister} from 'react-native-event-listeners';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Loader} from '../components/Loader';
import {Details} from '../screens';
import {Article} from '../utils/constants/NewsListDTO';
import {MainTabNavigator, MainTabParamList} from './MainTabNavigator';
import {NavigationKey} from './NavigationKey';

export type DetailsScreenRoot = {};
export type RootStackParamList = {
  [NavigationKey.MainTabNavigator]: NavigatorScreenParams<MainTabParamList>;
  [NavigationKey.Settings]: undefined;
  [NavigationKey.Details]: {item: Article};
  [NavigationKey.Loading]: undefined;
};

export const RootStack =
  createSharedElementStackNavigator<RootStackParamList>();

const rootScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const DarkMode = {
  ...DarkTheme,
  colors: {
    primary: '#000',
    background: '#000',
    card: 'rgb(255, 255, 255)',
    text: '#fff',
    border: 'rgba(0,0,0,0.5)',
    notification: 'rgb(255, 69, 58)',
    inactiveTab: 'rgba(255,255,255,0.9)',
  },
};

const LightMode = {
  ...DefaultTheme,
  colors: {
    primary: '#fff',
    background: '#fff',
    card: 'rgb(255, 255, 255)',
    text: '#000',
    border: 'rgba(0,0,0,0.5)',
    notification: 'rgb(255, 69, 58)',
    inactiveTab: 'rgba(0,0,0,0.5)',
  },
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
            return [
              {
                id: `item.${route.params.item.source.id}.image`,
                animation: 'fade-out',
              },
            ];
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

export default () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // device native event listner to trigger theme switching
  useEffect(() => {
    let eventListener: any = EventRegister.addEventListener(
      'changeThemeEvent',
      data => {
        setDarkMode(data);
      },
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  }, []);
  return (
    <NavigationContainer theme={darkMode ? DarkMode : LightMode}>
      <RootNavigator />
    </NavigationContainer>
  );
};
