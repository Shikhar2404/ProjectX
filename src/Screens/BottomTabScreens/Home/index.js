import {Image, StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React from 'react';
import {
  ProfilePic,
  BellIcon,
  textCurvedView,
  Location1,
  Loc2,
  Loc3,
  Loc4,
  Loc5,
  Loc6,
  Loc7,
  Star,
  GPS,
  boy1,
  boy2,
  boy3,
} from '../../../Assets/Images';
import {Colors} from '../../../utils/colors';
import {Card} from './../../../Components/Card';
import {responsiveSize} from '../../../utils/responsiveSize';
const HomeScreen = () => {
  const TravelData = [
    {
      locationImg: Location1,
      locationTitle: 'himachal pradesh',
      locationRating: '4.4',
      location: 'Mandi,HP',
    },
    {
      locationImg: Loc2,
      locationTitle: 'himachal pradesh',
      locationRating: '4.1',
      location: 'Mandi,HP',
    },
    {
      locationImg: Loc3,
      locationTitle: 'himachal pradesh',
      locationRating: '4.2',
      location: 'Mandi,HP',
    },
    {
      locationImg: Loc4,
      locationTitle: 'himachal pradesh',
      locationRating: '4.3',
      location: 'Mandi,HP',
    },
    {
      locationImg: Loc4,
      locationTitle: 'himachal pradesh',
      locationRating: '4.4',
      location: 'Mandi,HP',
    },
    {
      locationImg: Loc5,
      locationTitle: 'himachal pradesh',
      locationRating: '4.6',
      location: 'Mandi,HP',
    },
    {
      locationImg: Loc6,
      locationTitle: 'himachal pradesh',
      locationRating: '4.5',
      location: 'Mandi,HP',
    },
    {
      locationImg: Loc7,
      locationTitle: 'himachal pradesh',
      locationRating: '5.0',
      location: 'Mandi,HP',
    },
  ];
  const renderItem = ({item}) => {
    return <Item {...item} />;
  };

  const Item = ({id, locationImg, locationTitle, locationRating, location}) => {
    console.log(locationTitle, 'locationTitle');
    return (
      <View style={{flex: 1}}>
        <Card cardContainerStyle={{}}>
          <Image source={locationImg} style={{height: 276, width: 220}} />
          <View
            style={{
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                marginTop: 14,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                {locationTitle}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Star}
                  style={{height: 11, width: 12, resizeMode: 'contain'}}
                />
                <Text style={{fontSize: 15, fontWeight: '400'}}>
                  {locationRating}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={GPS} />
              <Text
                style={{fontSize: 15, fontWeight: '400', letterSpacing: 0.3}}>
                {location}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={{
                    height: 22,
                    width: 22,
                    borderRadius: 11,
                    backgroundColor: Colors.LIGHTBLUE,
                  }}>
                  <Image
                    source={ProfilePic}
                    style={{height: 22, width: 22, borderRadius: 11}}
                  />
                </View>
                <View
                  style={{
                    zIndex: 1,
                    right: 10,
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                  }}>
                  <Image
                    source={boy1}
                    style={{height: 24, width: 24, borderRadius: 12}}
                  />
                </View>
                <View
                  style={{
                    zIndex: 1,
                    right: 20,
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                  }}>
                  <Image
                    source={boy2}
                    style={{height: 24, width: 24, borderRadius: 12}}
                  />
                </View>
                <View
                  style={{
                    zIndex: 1,
                    right: 32,
                    height: 24,
                    width: 24,
                    borderRadius: 12,
                  }}>
                  <Image
                    source={boy3}
                    style={{height: 24, width: 24, borderRadius: 12}}
                  />
                </View>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  };
  const Seperator = () => <View style={{width: responsiveSize(30)}} />;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <View
        style={{
          marginHorizontal: 15,
          backgroundColor: Colors.white,
          justifyContent: 'space-between',
          marginTop: 45,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 118,
            height: 44,
            borderRadius: 22,
            backgroundColor: Colors.dullwhite,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 37,
              height: 37,
              borderRadius: 37 / 2,
              backgroundColor: 'pink',
            }}>
            <Image
              source={ProfilePic}
              style={{
                top: 3,
                resizeMode: 'contain',
                width: 37,
                height: 37,
                borderRadius: 37 / 2,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              alignSelf: 'center',
              paddingLeft: 6,
            }}>
            Shikhar
          </Text>
        </View>

        <Pressable onPress={() => {}}>
          <Image source={BellIcon} />
        </Pressable>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: 24,
        }}>
        <Text style={{fontSize: 38}}>Explore the</Text>
        <Text style={{fontSize: 38, fontWeight: '600'}}>
          Beautiful
          <Text style={{color: Colors.orange, fontWeight: '500'}}> world!</Text>
        </Text>
        <Image
          source={textCurvedView}
          style={{alignSelf: 'center', left: 20}}
        />
      </View>
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Best Destination</Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: Colors.ButtonBlue,
            alignSelf: 'center',
          }}>
          View all
        </Text>
      </View>

      <View style={{flex: 1, marginHorizontal: 20}}>
        <FlatList
          ItemSeparatorComponent={Seperator}
          horizontal
          renderItem={renderItem}
          data={TravelData}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

{
  /* <Text
          onPress={() => {
            console.log('user log out from text');
            dispatch(userLogout());
          }}>
          HomeScreen
        </Text> */
}
