import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {Header} from '../../Components/Headers';
import {BlueCheck, ProfilePic} from '../../Assets/Images';
import {Colors} from '../../utils/colors';
import {Input} from '../../Components/TextInput';
import {goBack, navigationRef} from '../../Navigators/utils';
// import PhoneInput from 'react-native-phone-number-input';
import {ROUTES} from '../../utils/constants';

const EditProfile = () => {
  const [firstName, setIsFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setIsLocation] = useState('');
  const [mobileNumber, setIsMobileNumber] = useState('');
  const [passwordError, setPasswordError] = useState();

  const lastnameRef = useRef();
  const locationRef = useRef();
  const mobileNumberRef = useRef();

  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => {
          goBack();
        }}
        hasBackButton={true}
        hasRightIcon={true}
        title="Edit Profile"
        hasRightTitle={true}
        rightTitle={'Done'}
        onRightTitlePress={() => {
          navigationRef.navigate(ROUTES.NOTIFICATIONS);
        }}
      />
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
        <Pressable style={{marginTop: 6}} onPress={() => {}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: Colors.ButtonBlue,
            }}>
            Change Profile Picture
          </Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          marginHorizontal: 20,
          marginTop: 30,
        }}
        style={{flex: 1}}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              letterSpacing: 0.5,
              color: Colors.BLACK,
            }}>
            First Name
          </Text>
          <Input
            containerStyle={{
              marginTop: 12,
              backgroundColor: Colors.dullwhite,
              borderWidth: 0,
            }}
            iconPressDisabled={false}
            iconSource={!firstName ? BlueCheck : undefined}
            refs={locationRef}
            returnKeyLabel="next"
            returnKeyType="next"
            value={lastName}
            onChangeText={text => setLastName(text)}
            onFocus={() => {
              setPasswordError('');
            }}
            onSubmitEditing={() => lastnameRef?.current?.focus()}
          />
        </View>
        <View style={{marginTop: 16}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              letterSpacing: 0.5,
              color: Colors.BLACK,
            }}>
            Last Name
          </Text>
          <Input
            inputStyle={{borderWidth: 0}}
            containerStyle={{
              marginTop: 12,
              backgroundColor: Colors.dullwhite,
              borderWidth: 0,
            }}
            iconPressDisabled={false}
            iconSource={!lastName ? BlueCheck : undefined}
            refs={lastnameRef}
            returnKeyLabel="next"
            returnKeyType="next"
            value={firstName}
            onChangeText={text => setIsFirstName(text)}
            onFocus={() => {
              setPasswordError('');
            }}
            onSubmitEditing={() => lastnameRef?.current?.focus()}
          />
        </View>
        <View style={{marginTop: 12}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              letterSpacing: 0.5,
              color: Colors.BLACK,
            }}>
            Location
          </Text>
          <Input
            containerStyle={{
              marginTop: 12,
              backgroundColor: Colors.dullwhite,
              borderWidth: 0,
            }}
            iconPressDisabled={false}
            iconSource={!location ? BlueCheck : undefined}
            refs={locationRef}
            returnKeyLabel="next"
            returnKeyType="next"
            value={location}
            onChangeText={loc => setIsLocation(loc)}
            onFocus={() => {
              setPasswordError('');
            }}
            onSubmitEditing={() => mobileNumberRef?.current?.focus()}
          />
        </View>
        <View style={{marginTop: 12}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              letterSpacing: 0.5,
              color: Colors.BLACK,
            }}>
            Mobile Number
          </Text>
          <Input
            keyboardType="number-pad"
            containerStyle={{
              marginTop: 12,
              backgroundColor: Colors.dullwhite,
              borderWidth: 0,
            }}
            iconPressDisabled={false}
            iconSource={!location ? BlueCheck : undefined}
            returnKeyLabel="Done"
            returnKeyType="done"
            value={location}
            onChangeText={number => setIsMobileNumber(number)}
            onFocus={() => {
              setPasswordError('');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
