import React from 'react';
import {Dimensions, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../theme/colors';
import {fontSizeStyle} from '../theme/fontStyle';
import {Spacing} from '../theme/layout';
import STRINGS from '../utils/strings';

interface SearchBarProps {
  term: string;
  onChangeText: (e: string) => void;
}

const {height} = Dimensions.get('screen');
export const SearchBar: React.FC<SearchBarProps> = ({term, onChangeText}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={term}
        onChangeText={onChangeText}
        style={styles.textInputStyle}
        placeholder={STRINGS.t('search')}
      />
      <Icon name="search1" size={24} color={colors.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: height * 0.08,
    backgroundColor: colors.lightgray,
    borderRadius: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textInputStyle: {
    flex: 1,
    fontWeight: '500',
    fontSize: fontSizeStyle.xl,
  },
});
