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
import {respFontSize, responsiveSize} from '../../../utils/responsiveSize';
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
          <Image
            source={locationImg}
            style={{height: responsiveSize(276), width: responsiveSize(220)}}
          />
          <View
            style={{
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                marginTop: responsiveSize(14),
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: respFontSize(18),
                  fontWeight: '500',
                }}>
                {locationTitle}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Star}
                  style={{
                    height: responsiveSize(11),
                    width: responsiveSize(12),
                    resizeMode: 'contain',
                  }}
                />
                <Text style={{fontSize: respFontSize(15), fontWeight: '400'}}>
                  {locationRating}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={GPS} />
              <Text
                style={{
                  fontSize: respFontSize(15),
                  fontWeight: '400',
                  letterSpacing: 0.3,
                }}>
                {location}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <View
                  style={{
                    height: responsiveSize(22),
                    width: responsiveSize(22),
                    borderRadius: responsiveSize(11),
                    backgroundColor: Colors.LIGHTBLUE,
                  }}>
                  <Image
                    source={ProfilePic}
                    style={{
                      height: responsiveSize(22),
                      width: responsiveSize(22),
                      borderRadius: responsiveSize(11),
                    }}
                  />
                </View>
                <View
                  style={{
                    zIndex: 1,
                    right: responsiveSize(10),
                    height: responsiveSize(24),
                    width: responsiveSize(24),
                    borderRadius: responsiveSize(12),
                  }}>
                  <Image
                    source={boy1}
                    style={{
                      height: responsiveSize(24),
                      width: responsiveSize(24),
                      borderRadius: responsiveSize(12),
                    }}
                  />
                </View>
                <View
                  style={{
                    zIndex: 1,
                    right: responsiveSize(20),
                    height: responsiveSize(24),
                    width: responsiveSize(24),
                    borderRadius: responsiveSize(12),
                  }}>
                  <Image
                    source={boy2}
                    style={{
                      height: responsiveSize(24),
                      width: responsiveSize(24),
                      borderRadius: responsiveSize(12),
                    }}
                  />
                </View>
                <View
                  style={{
                    zIndex: 1,
                    right: responsiveSize(32),
                    height: responsiveSize(24),
                    width: responsiveSize(24),
                    borderRadius: responsiveSize(12),
                  }}>
                  <Image
                    source={boy3}
                    style={{
                      height: responsiveSize(24),
                      width: responsiveSize(24),
                      borderRadius: responsiveSize(12),
                    }}
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
          marginHorizontal: responsiveSize(15),
          backgroundColor: Colors.white,
          justifyContent: 'space-between',
          marginTop: responsiveSize(45),
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: responsiveSize(118),
            height: responsiveSize(44),
            borderRadius: responsiveSize(22),
            backgroundColor: Colors.dullwhite,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: responsiveSize(37),
              height: responsiveSize(37),
              borderRadius: responsiveSize(37 / 2),
              backgroundColor: 'pink',
            }}>
            <Image
              source={ProfilePic}
              style={{
                top: responsiveSize(3),
                resizeMode: 'contain',
                width: responsiveSize(37),
                height: responsiveSize(37),
                borderRadius: responsiveSize(37 / 2),
              }}
            />
          </View>
          <Text
            style={{
              fontSize: respFontSize(14),
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
          marginHorizontal: responsiveSize(15),
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          marginTop: responsiveSize(24),
        }}>
        <Text style={{fontSize: responsiveSize(38)}}>Explore the</Text>
        <Text style={{fontSize: responsiveSize(38), fontWeight: '600'}}>
          Beautiful
          <Text style={{color: Colors.orange, fontWeight: '500'}}> world!</Text>
        </Text>
        <Image
          source={textCurvedView}
          style={{alignSelf: 'center', left: responsiveSize(20)}}
        />
      </View>
      <View
        style={{
          marginTop: responsiveSize(30),
          marginHorizontal: responsiveSize(15),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: respFontSize(20), fontWeight: '600'}}>
          Best Destination
        </Text>
        <Text
          style={{
            fontSize: respFontSize(14),
            fontWeight: '400',
            color: Colors.ButtonBlue,
            alignSelf: 'center',
          }}>
          View all
        </Text>
      </View>

      <View style={{flex: 1, marginHorizontal: responsiveSize(20)}}>
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
