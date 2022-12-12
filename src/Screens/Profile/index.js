import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Header} from '../../Components/Headers';
import {Colors} from '../../utils/colors';
import {
  BackReverse,
  Bookmark,
  ProfilePic,
  Search,
  Settings,
  TravelIcon,
  UserIcon,
  EditIcon,
} from '../../Assets/Images';
import {responsiveSize, respFontSize} from '../../utils/responsiveSize';
import {navigationRef, goBack} from '../../Navigators/utils';
import {ROUTES} from '../../utils/constants';

import {useDispatch, useSelector} from 'react-redux';

import {incremented} from '../../Store/reducer/CounterReducer';

const Profile = () => {
  const ProfileOptions = [
    {id: 0, iconImage: UserIcon, title: 'Profile', rightIcon: BackReverse},
    {id: 1, iconImage: Bookmark, title: 'Bookmarked'},
    {id: 2, iconImage: TravelIcon, title: 'Previous Trips'},
    {id: 3, iconImage: Settings, title: 'Settings'},
    {id: 3, iconImage: Search, title: 'Version'},
  ];

  // const dispatch = useDispatch();
  // const state = useSelector(state => state);
  // console.log('state from userSelector', state);
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <Header
        onPress={() => {
          goBack();
        }}
        hasBackButton={true}
        title="Profile"
        hasRightIcon={true}
        rightIcon={EditIcon}
        onIconPress={() => {
          navigationRef.navigate(ROUTES.EDITPROFILE);
        }}
      />
      {/* 
      <TouchableOpacity
        onPress={() => {
          dispatch(incremented(10));
          console.log('Here');
        }}
        style={{
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: 100,
        }}>
        <Text> increment button </Text>
      </TouchableOpacity> */}

      <View style={{flex: 1}}>
        <View
          style={{
            marginTop: 41,
            width: 96,
            alignSelf: 'center',
            height: 96,
            borderRadius: 96 / 2,
            backgroundColor: 'pink',
          }}>
          <Image
            source={ProfilePic}
            style={{
              resizeMode: 'contain',
              height: 96,
              borderRadius: 96 / 2,
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 12,
          }}>
          <Text style={{fontSize: 24, fontWeight: '500'}}>Shikhar</Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              marginTop: 6,
              color: Colors.silver,
            }}>
            Shikhar@innow8apps.com
          </Text>
        </View>

        <View
          style={{
            marginTop: 30,
            // flex: 1,
            height: 78,
            width: 335,
            alignSelf: 'center',
            backgroundColor: 'white',
            borderRadius: 15,
            // flexWrap:1,
            // alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            shadowColor: 'rgba(189, 198, 211, 0.12)',
            shadowOpacity: 2,
            shadowRadius: 15,
            shadowOffset: {
              height: 20,
              width: 0,
            },
          }}>
          <View
            style={{
              padding: 12,
              borderColor: Colors.dullwhite,
              alignItems: 'center',
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}>
            <Text style={{color: Colors.BLACK, fontWeight: 'bold'}}>
              Reward Points
            </Text>
            <Text
              style={{
                paddingTop: 10,
                color: Colors.ButtonBlue,
                fontWeight: 'bold',
              }}>
              360
            </Text>
          </View>

          <View
            style={{
              padding: 12,
              // borderColor: Colors.dullwhite,
              alignItems: 'center',
              borderRadius: 12,
              borderBottomColor: '',
            }}>
            <Text style={{fontWeight: 'bold'}}>Travel Trips</Text>
            <Text
              style={{
                paddingTop: 10,
                color: Colors.ButtonBlue,
                fontWeight: 'bold',
              }}>
              160
            </Text>
          </View>
          <View
            style={{
              padding: 12,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: Colors.dullwhite,
              backgroundColor: 'white',
              alignItems: 'center',
              borderRightWidth: 1,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
            }}>
            <Text style={{color: Colors.BLACK, fontWeight: 'bold'}}>
              Bucket List
            </Text>
            <Text
              style={{
                color: Colors.ButtonBlue,
                padding: 10,
                fontWeight: 'bold',
              }}>
              400
            </Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, marginHorizontal: 20, marginTop: 30}}>
            {ProfileOptions.map((item, index) => (
              <Pressable
                key={index.toString()}
                style={styles.optionWrapper}
                onPress={() => {}}>
                <View style={styles.optionDescWrapper}>
                  <Image source={item.iconImage} style={styles.iconPicture} />
                  <Text style={styles.title}> {item.title} </Text>
                </View>
                <View>
                  <Image source={BackReverse} style={styles.arrow} />
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  optionWrapper: {
    borderRadius: responsiveSize(15),
    borderColor: Colors.silver,
    paddingHorizontal: responsiveSize(30),
    borderBottomWidth: 0.2,
    paddingVertical: responsiveSize(20),
    marginTop: responsiveSize(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionDescWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPicture: {
    height: responsiveSize(25),
    width: responsiveSize(25),
    resizeMode: 'contain',
  },
  title: {
    fontSize: respFontSize(14),
    color: Colors.BLACK,
    fontWeight: '500',
    marginLeft: responsiveSize(20),
  },
  arrow: {
    resizeMode: 'contain',
  },
});
