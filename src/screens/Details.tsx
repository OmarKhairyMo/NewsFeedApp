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
import React from 'react';
import {Spacing} from '../theme/layout';
import {NewsList} from '../utils/constants/DummyData';
import {colors} from '../theme/colors';
import {fontSizeStyle} from '../theme/fontStyle';

const {height} = Dimensions.get('screen');
export const Details = () => {
  return (
    <ImageBackground
      imageStyle={{opacity: 0.5}}
      blurRadius={1}
      source={{
        uri: 'https://images.pexels.com/photos/930004/pexels-photo-930004.jpeg?auto=compress&cs=tinysrgb&w=1600',
      }}
      style={styles.container}>
      <ScrollView style={{paddingHorizontal: Spacing}}>
        {/* Header */}
        <View
          style={{
            height: height * 0.1,
            justifyContent: 'center',
            paddingHorizontal: Spacing,
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              elevation: 8,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: height * 0.5}}></View>
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
          <Text>Image</Text>
        </View>
        <Text
          style={{fontSize: 24, color: colors.white, marginBottom: Spacing}}>
          {NewsList[0].description}
        </Text>
      </ScrollView>
    </ImageBackground>
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
