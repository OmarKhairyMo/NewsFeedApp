import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {MainTabParamList} from '../navigation/MainTabNavigator';
import {NavigationKey} from '../navigation/NavigationKey';
import {RootStackParamList} from '../navigation/RootNavigator';
import {colors} from '../theme/colors';
import {fontSizeStyle} from '../theme/fontStyle';
import {Spacing} from '../theme/layout';
import {NewListDTO} from '../utils/constants/NewsListDTO';

interface NewListProps {
  item: NewListDTO;
}

export type HomeScreenProps = CompositeNavigationProp<
  NativeStackNavigationProp<MainTabParamList, NavigationKey.Home>,
  NativeStackNavigationProp<RootStackParamList>
>;

const {height} = Dimensions.get('screen');

const NewsListComponent: React.FC<NewListProps> = ({item}) => {
  const navigation = useNavigation<HomeScreenProps>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NavigationKey.Details, {item})}
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
          borderRadius: 15,
        }}>
        <SharedElement id={`${item.id}`}>
          <Image
            source={{uri: item.img}}
            style={{width: '100%', height: '100%', borderRadius: 15}}
          />
        </SharedElement>
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
    </TouchableOpacity>
  );
};

export default NewsListComponent;

const styles = StyleSheet.create({});
