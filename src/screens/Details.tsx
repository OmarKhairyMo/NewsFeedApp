import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';
import BookMarkIcon from 'react-native-vector-icons/Ionicons';
import {SharedElement} from 'react-navigation-shared-element';
import {NavigationKey} from '../navigation/NavigationKey';
import {RootStackParamList} from '../navigation/RootNavigator';
import {colors} from '../theme/colors';
import {fontSizeStyle} from '../theme/fontStyle';
import {Spacing} from '../theme/layout';
import {NewsList} from '../utils/constants/DummyData';

const {height} = Dimensions.get('screen');
export type DetailsRouteProps = RouteProp<
  RootStackParamList,
  NavigationKey.Details
>;

export const Details = () => {
  const [saveBookMark, setSaveBookMark] = useState<boolean>(false);
  const {params} = useRoute<DetailsRouteProps>();
  const navigation = useNavigation();
  const currentNews = params.item || NewsList[0];
  return (
    <>
      <View style={styles.container}>
        <SharedElement
          style={[StyleSheet.absoluteFillObject]}
          id={`item.${currentNews.source.id}.image`}>
          <View style={[StyleSheet.absoluteFillObject]}>
            <FastImage
              source={{uri: currentNews.urlToImage}}
              style={[
                StyleSheet.absoluteFillObject,
                {backgroundColor: 'black', opacity: 0.7},
              ]}
            />
          </View>
        </SharedElement>
        <ScrollView style={{paddingHorizontal: Spacing}}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <ArrowLeftIcon name="left" size={24} color={colors.black} />
            </TouchableOpacity>
          </View>
          {/* <View style={{height: height * 0.4}}></View> */}
          {/* Title Container */}
          <Text style={styles.titleStyle}>{currentNews.title}</Text>
          {/* Publisher Details */}
          <View style={styles.publisherDetailsContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.avatarContainer}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}
                  style={styles.avatarImageStyle}
                />
              </View>
              <View style={{marginLeft: Spacing}}>
                <Text
                  style={{
                    color: colors.white,
                    fontWeight: 'bold',
                    fontSize: fontSizeStyle.xl,
                  }}>
                  {currentNews.source.name}
                </Text>
                <Text style={{color: colors.gray, fontWeight: '500'}}>
                  {currentNews.publishedAt}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setSaveBookMark(!saveBookMark)}>
              <BookMarkIcon
                name={saveBookMark ? 'bookmark' : 'bookmark-outline'}
                size={24}
                color={saveBookMark ? colors.orange : colors.white}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 24,
              color: colors.white,
              marginVertical: Spacing,
            }}>
            {currentNews.content || NewsList[0].description}
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.black},
  headerContainer: {
    height: height * 0.1,
    justifyContent: 'center',
    paddingHorizontal: Spacing,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: fontSizeStyle.title,
    color: colors.white,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  publisherDetailsContainer: {
    width: '100%',
    height: height * 0.08,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderColor: colors.white,
    paddingBottom: 10,
    marginTop: 5,
  },
  avatarContainer: {width: 50, height: 50},
  avatarImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
