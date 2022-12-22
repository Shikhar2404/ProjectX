import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Header} from '../../Components/Headers';
import {
  Loc2,
  Loc3,
  Loc4,
  GPS,
  Loc5,
  Star,
  Loc6,
  Loc7,
  redHotelBG,
  ProfilePic,
  boy1,
  boy2,
  boy3,
} from '../../Assets/Images';
import {respFontSize, responsiveSize} from '../../utils/responsiveSize';

const ViewScreen = () => {
  const mockData = [
    {
      locationName: 'Niladri Reservoir',
      location: 'Tekerat, Sunamgnj',
      id: 1,
      estimatedTime: '45 mins',
      rating: 4.8,
    },
  ];
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          opacity: 0.8,
          backgroundColor: ' rgba(62, 62, 62, 1)',
          height: responsiveSize(224),
          borderRadius: responsiveSize(20),
        }}>
        <View
          style={{
            marginHorizontal: responsiveSize(20),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: responsiveSize(24),
          }}>
          <Text
            style={{
              color: Colors.white,
              fontWeight: '500',
              fontSize: respFontSize(18),
            }}>
            {item.locationName}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Image source={Star} style={{alignSelf: 'center'}} />
            <Text
              style={{
                fontSize: respFontSize(15),
                fontWeight: '500',
                color: Colors.white,
              }}>
              {4.8}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: responsiveSize(20),
            marginTop: responsiveSize(12),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={GPS} style={{alignSelf: 'center'}} />
            <Text
              style={{
                left: responsiveSize(5),
                fontWeight: '400',
                fontSize: respFontSize(13),
                letterSpacing: 0.3,
                color: Colors.white,
              }}>
              Tekerat, sundernagar
            </Text>
          </View>
          <View
            style={{
              left: responsiveSize(45),
            }}>
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
              <View
                style={{
                  zIndex: 1,
                  backgroundColor: Colors.LIGHTBLUE,
                  right: responsiveSize(46),
                  height: responsiveSize(24),
                  width: responsiveSize(24),
                  borderRadius: responsiveSize(12),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: respFontSize(10),
                    fontWeight: '400',
                    color: Colors.BLACK,
                  }}>
                  +60
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: responsiveSize(20),
            justifyContent: 'flex-start',
            flexDirection: 'row',
            marginTop: responsiveSize(12),
          }}>
          <Image source={GPS} style={{alignSelf: 'center'}} />
          <Text
            style={{
              fontWeight: '400',
              fontSize: respFontSize(13),
              letterSpacing: 0.3,
              color: Colors.white,
              left: responsiveSize(5),
            }}>
            45 Minutes
          </Text>
        </View>

        <Pressable style={styles.mapsBtn}>
          <Text style={{fontWeight: '600', color: Colors.white}}>
            See On The Map
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <>
      <StatusBar
        backgroundColor={'rgb(65,179,249)'}
        barStyle={'dark-content'}
      />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ImageBackground
          source={redHotelBG}
          style={{flex: 1, justifyContent: 'space-between'}}>
          <Header
            hasBackButton
            title={'View'}
            titleTextStyle={{color: Colors.white}}
          />
          <View style={{marginBottom: 10}}>
            <FlatList
              style={{
                marginHorizontal: responsiveSize(20),
                borderRadius: responsiveSize(15),
              }}
              contentContainerStyle={{}}
              data={mockData}
              keyExtractor={index => 'key' + index}
              renderItem={renderItem}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({
  mapsBtn: {
    marginTop: responsiveSize(20),
    borderRadius: responsiveSize(15),
    height: responsiveSize(56),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.ButtonBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
