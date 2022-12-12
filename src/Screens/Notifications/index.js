import React from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
import {Colors} from '../../utils/colors';
import {Header} from '../../Components/Headers';
import {goBack} from '../../Navigators/utils';

import {
  fakeUser2,
  fakeUser3,
  fakeUser4,
  fakeUser5,
  fakeUser6,
  fakeUserOne,
} from '../../Assets/Images';

import Divider from '../../Components/Divider';
import {respFontSize, responsiveSize} from '../../utils/responsiveSize';

const NotificationScreen = () => {
  const DummyNotficationObjects = [
    {
      profileImg: fakeUserOne,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser2,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser3,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser4,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser4,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser5,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser6,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser6,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser5,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
    {
      profileImg: fakeUser4,
      title: 'Super offer',
      desc: 'Get 60% off in our first booking',
    },
  ];

  const Item = ({title, desc, onPress, profileImg, item}) => {
    console.log('item from item ');

    return (
      <View
        style={{
          // justifyContent: 'space-evenly',
          height: responsiveSize(76),
          width: responsiveSize(375),
          // backgroundColor: 'cyan',
          flexDirection: 'row',
          margin: 10,
          // marginVertical: responsiveSize(6),
        }}>
        <View
          style={{
            // backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={profileImg}
            style={{
              height: responsiveSize(48),
              width: responsiveSize(48),
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: responsiveSize(14),
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              marginTop: responsiveSize(14),
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor: 'blue',
            }}>
            <Text
              style={{
                fontSize: respFontSize(18),
                fontWeight: '500',
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontSize: respFontSize(11),
                fontWeight: '400',
                color: Colors.silver,
                paddingLeft: 120,
              }}>
              Sun,12:40pm
            </Text>
          </View>
          <Text
            style={{
              width: '100%',
              fontWeight: '400',
              fontSize: respFontSize(14),
              marginTop: responsiveSize(8),
              color: Colors.silver,
            }}>
            {desc}
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log(item, 'item from render item');
    return <Item {...item} />;
  };

  {
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <Header
          onPress={() => {
            goBack();
          }}
          hasBackButton
          title={'Notifications'}
          hasRightTitle
          rightTitle={'Clear all'}
        />

        <View
          style={{
            marginTop: responsiveSize(30),
            marginHorizontal: responsiveSize(10),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: respFontSize(16),
              fontWeight: '600',
              color: Colors.ButtonBlue,
            }}>
            Recent
          </Text>
          <Text
            style={{
              fontSize: respFontSize(16),
              fontWeight: '600',
              color: Colors.BLACK,
            }}>
            Earlier
          </Text>
          <Text
            style={{
              fontSize: respFontSize(16),
              fontWeight: '600',
              color: Colors.BLACK,
            }}>
            Archieved
          </Text>
        </View>
        <Divider />
        <View style={{flex: 1, marginHorizontal: responsiveSize(20)}}>
          <FlatList
            data={DummyNotficationObjects}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
};

export default NotificationScreen;

const styles = StyleSheet.create({});
