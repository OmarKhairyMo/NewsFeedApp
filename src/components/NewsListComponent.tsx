import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Spacing} from '../theme/layout';
import {colors} from '../theme/colors';
import {fontSizeStyle} from '../theme/fontStyle';
import {NewListDTO} from '../utils/constants/NewsListDTO';

interface NewListProps {
  item: NewListDTO;
}
const {height} = Dimensions.get('screen');
const NewsListComponent: React.FC<NewListProps> = ({item}) => {
  return (
    <View
      style={{
        padding: Spacing,
        height: height * 0.15,
        backgroundColor: colors.lightgray,
        marginVertical: 15,
        borderRadius: 20,
        flexDirection: 'row',
      }}>
      {/* Img Container */}
      <View
        style={{
          width: '30%',
          height: '100%',
          backgroundColor: 'blue',
          borderRadius: 15,
          elevation: 15,
        }}>
        <Image
          source={{uri: item.img}}
          style={{width: '100%', height: '100%', borderRadius: 15}}
        />
      </View>
      {/* Text Container */}
      <View style={{flex: 1, paddingLeft: 15}}>
        <Text
          numberOfLines={3}
          style={{
            fontSize: fontSizeStyle.lg,
            fontWeight: 'bold',
            color: colors.black,
          }}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: Spacing,
          }}>
          <Text numberOfLines={3}>{item.readTime}</Text>
          <Text numberOfLines={3}>{item.publishedDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default NewsListComponent;

const styles = StyleSheet.create({});
