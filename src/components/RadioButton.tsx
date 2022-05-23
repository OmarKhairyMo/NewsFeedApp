import React, {useState, memo, useCallback} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {colors} from '../theme/colors';

// strings import
import STRINGS from '../utils/strings';

interface EnumList {
  key: number;
  value: string;
  title: string;
}

interface RadioButtonProps {
  title?: string;
  initialValue?: number | undefined;
  list: EnumList[];
  onSelect: (result: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  const {colors} = useTheme();
  const {title, initialValue, list, onSelect} = props;

  // to set the initial selected radio if needed
  const [selectedButton, setSelectedButton] = useState<any>(
    initialValue ? list[initialValue as number] : list[0],
  );

  // to update selection and return value in onSelect getter function
  const selectHandler = useCallback(
    (index: string, item: any) => {
      setSelectedButton(item);
      onSelect({...item, index});
    },
    [selectedButton],
  );

  const renderRadioButtons = ({item, index}: any) => {
    let isActive = selectedButton === item;
    return (
      <View style={styles.radioContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchArea}
          onPress={() => selectHandler(index, item)}>
          <View
            style={[
              styles.radioButton,
              isActive && {borderColor: colors.text},
            ]}>
            {isActive && <View style={styles.activeCircle} />}
          </View>
          <Text style={[styles.radioTxt, {color: colors.text}]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {title && (
        <Text style={[styles.headerTitle, {color: colors.text}]}>
          {STRINGS.t('language')}
        </Text>
      )}
      <View style={styles.listContainer}>
        <FlatList
          scrollEnabled={false}
          data={list}
          keyExtractor={item => item.key.toString()}
          renderItem={renderRadioButtons}
        />
      </View>
    </View>
  );
};

export default memo(RadioButton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
  },
  headerTitle: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 14,
    textAlign: 'left',
  },
  listContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  touchArea: {
    flexDirection: 'row',
    flex: 1,
    paddingBottom: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 20 / 2,
    marginEnd: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioTxt: {
    fontSize: 16,
    color: colors.white,
  },
  activeCircle: {
    width: 13,
    height: 13,
    borderRadius: 13 / 2,
    backgroundColor: colors.black,
  },
});
