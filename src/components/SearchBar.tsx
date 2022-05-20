import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Spacing} from '../theme/layout';
import {fontSizeStyle} from '../theme/fontStyle';
import {colors} from '../theme/colors';

interface SearchBarProps {
  term: string;
}
const {height, width} = Dimensions.get('screen');
export const SearchBar: React.FC<SearchBarProps> = ({term}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.textInputStyle} placeholder="Search News" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: height * 0.08,
    backgroundColor: colors.gray,
    borderRadius: 24,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInputStyle: {
    flex: 1,
    fontWeight: '500',
    fontSize: fontSizeStyle.xl,
    paddingHorizontal: Spacing,
  },
});
