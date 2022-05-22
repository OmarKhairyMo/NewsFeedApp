import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Spacing} from '../theme/layout';
import {NewsList} from '../utils/constants/DummyData';
import {colors} from '../theme/colors';
import {fontSizeStyle} from '../theme/fontStyle';
import ArrowLeftIcon from 'react-native-vector-icons/AntDesign';
import BookMarkIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';

const {height} = Dimensions.get('screen');
export const Details = () => {
  const [saveBookMark, setSaveBookMark] = useState<boolean>(false);
  const {params} = useRoute();
  console.log(params.item.id);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <SharedElement
          style={[StyleSheet.absoluteFillObject]}
          id={`${params.item.id}`}>
          <View style={[StyleSheet.absoluteFillObject]}>
            <Image
              source={{uri: params.item.img}}
              style={[
                StyleSheet.absoluteFillObject,
                {backgroundColor: 'black', opacity: 0.7},
              ]}
              blurRadius={1}
            />
          </View>
        </SharedElement>
        <ScrollView style={{paddingHorizontal: Spacing}}>
          {/* Header */}
          <View
            style={{
              height: height * 0.1,
              justifyContent: 'center',
              paddingHorizontal: Spacing,
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                elevation: 8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.white,
              }}>
              <ArrowLeftIcon name="left" size={24} color={colors.black} />
            </TouchableOpacity>
          </View>
          {/* <View style={{height: height * 0.4}}></View> */}
          {/* Title Container */}
          <Text style={styles.titleStyle}>{NewsList[0].title}</Text>
          {/* Publisher Details */}
          <View
            style={{
              width: '100%',
              height: height * 0.08,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 2,
              borderColor: colors.white,
              paddingBottom: 10,
              marginTop: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                }}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }}
                  style={{width: '100%', height: '100%', borderRadius: 50}}
                />
              </View>
              <View style={{marginLeft: Spacing}}>
                <Text
                  style={{
                    color: colors.white,
                    fontWeight: 'bold',
                    fontSize: fontSizeStyle.xl,
                  }}>
                  Economic Times
                </Text>
                <Text style={{color: colors.gray, fontWeight: '500'}}>
                  Today,8:21 AM
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
            {NewsList[0].description}
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.black},
  titleStyle: {
    fontWeight: 'bold',
    fontSize: fontSizeStyle.title,
    color: colors.white,
  },
});
