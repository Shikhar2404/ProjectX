import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {Boat123, Scenery3, sea2} from '../../Assets/Images';
import {Colors} from '../../utils/colors';
import {respFontSize, responsiveSize} from './../../utils/responsiveSize';
import {navigationRef} from '../../Navigators/utils';
import {ROUTES} from '../../utils/constants';

const OnBoarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const DATA = [
    {
      coverImage: Boat123,
      title: 'Life is short and the world is wide',
      text: 'At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world',
    },
    {
      coverImage: sea2,
      title: 'It’s a big world out there go explore',
      text: 'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    },
    {
      coverImage: Scenery3,
      title: 'People don’t take trips, trips take people',
      text: 'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    },
  ];

  return (
    <>
      <StatusBar animated={true} barStyle={'light-content'} />
      <View
        style={{
          paddingBottom: responsiveSize(50),
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SwiperFlatList
          paginationStyleItemInactive={() => {
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: Colors.lightgreen,
              }}
            />;
          }}
          autoplayDelay
          autoplayLoopKeepAnimation={true}
          ref={swiperRef}
          showPagination
          data={DATA}
          index={0}
          paginationActiveColor={Colors.ButtonBlue}
          paginationDefaultColor={Colors.LIGHTBLUE}
          paginationStyle={{top: responsiveSize(710), zIndex: 9}}
          paginationStyleItem={{
            borderRadius: responsiveSize(10),
            width: responsiveSize(10),
            height: responsiveSize(10),
          }}
          // contentContainerStyle={{backgroundColor: 'cyan'}}
          renderItem={({item}) => (
            <View
              style={{
                alignItems: 'center',
              }}>
              <ImageBackground
                imageStyle={{
                  borderBottomLeftRadius: responsiveSize(30),
                  borderBottomRightRadius: responsiveSize(30),
                }}
                source={item.coverImage}
                style={{
                  width: Dimensions.get('screen').width,
                  aspectRatio: 1,
                  alignItems: 'flex-end',
                }}>
                <Text
                  onPress={() => {
                    navigationRef.navigate(ROUTES.SIGNUP);
                  }}
                  style={{
                    fontWeight: '400',
                    color: '#CAEAFF',
                    top: responsiveSize(60),
                    fontSize: respFontSize(18),
                    right: responsiveSize(15),
                  }}>
                  Skip
                </Text>
              </ImageBackground>
              <View
                style={{
                  width: 310,
                  height: 72,
                  marginTop: 40,
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: '400',
                    textAlign: 'center',
                  }}>
                  {item.title}
                </Text>

                {/* <View
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                    backgroundColor: 'red',
                  }}
                /> */}
              </View>
              <View
                style={{
                  marginTop: 10,
                  width: 294,
                  height: 72,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    textAlign: 'center',
                    color: Colors.silver,
                  }}>
                  {item.text}
                </Text>
              </View>
            </View>
          )}
          onViewableItemsChanged={params => {
            setActiveIndex(params.changed?.[0]?.index);
          }}
        />

        <Pressable
          onPress={() => {
            if (activeIndex !== 2) {
              let updatedIndex = activeIndex + 1;
              swiperRef.current?.scrollToIndex({
                animated: true,
                index: updatedIndex,
              });
            } else {
              navigationRef.navigate(ROUTES.SIGNUP);
            }
          }}
          style={{
            borderRadius: responsiveSize(16),
            backgroundColor: Colors.ButtonBlue,
            height: responsiveSize(56),
            width: responsiveSize(335),
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.white, fontWeight: '500'}}>
            {activeIndex === 0 ? 'Get Started' : 'Next'}
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
