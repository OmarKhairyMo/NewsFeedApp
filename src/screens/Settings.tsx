// helpers import
import {useTheme} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import {Switch} from 'react-native-switch';
import RadioButton from '../components/RadioButton';
import {changeLanguage} from '../utils/helpers';
// styles import
// import styles from './style'
// strings import
import STRINGS from '../utils/strings';

const languageList = [
  {key: 1, title: STRINGS.t('english'), value: 'en'},
  {key: 2, title: STRINGS.t('arabic'), value: 'ar'},
];

export const Settings = () => {
  const {colors} = useTheme();
  const [language, setLanguage] = useState<string>(STRINGS.language); // to store selected language
  const [darkMode, setDarkMode] = useState<boolean>(false); // to store selected language
  // to handle language toggle
  const onSelect = useCallback(
    item => {
      setLanguage(item.value);
      if (language !== item.value) {
        changeLanguage();
      }
    },
    [language],
  );

  return (
    <View style={[styles.screenContainer]}>
      <View style={{flex: 0.2}}>
        <RadioButton
          initialValue={language == 'en' ? 0 : 1}
          title={STRINGS.t('language')}
          list={languageList}
          onSelect={onSelect}
        />
      </View>
      <View style={styles.darkmodeContainer}>
        <Text style={[styles.darkText, {color: colors.text}]}>
          {STRINGS.t('darkMode')}
        </Text>
        <Switch
          containerStyle={styles.switch}
          value={darkMode}
          activeText={''}
          inActiveText={''}
          onValueChange={(v: boolean) => {
            EventRegister.emit('changeThemeEvent', v);
            setDarkMode(v);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 14,
  },
  darkmodeContainer: {
    justifyContent: 'center',
  },
  darkText: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
  },
  switch: {
    marginTop: 12,
  },
});
