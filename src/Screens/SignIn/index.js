import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  Linking,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Facebook, Instagram, Tweet} from '../../Assets/Images';
import {goBack, navigationRef} from '../../Navigators/utils';
import {ROUTES} from '../../utils/constants';
import {Header} from '../../Components/Headers';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <View
        style={{
          flex: 1,
        }}>
        <Header
          hasBackButton={true}
          onPress={() => {
            goBack();
          }}
        />

        <View
          style={{
            marginTop: 92,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '800', color: 'black', fontSize: 26}}>
            Sign in now
          </Text>
          <Text style={{marginTop: 12, fontSize: 16}}>
            Please sign in to contiune our app
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'black'}
              style={{
                marginTop: 18,
                width: 335,
                height: 56,
                borderRadius: 12,
                color: '#F7F7F9',
                borderWidth: 0,
                padding: 10,
                backgroundColor: '#F7F7F9',
              }}
              value={email}
              onChangeText={value => {
                setEmail(value);
              }}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor={'black'}
              style={{
                marginTop: 18,
                width: 335,
                height: 56,
                borderRadius: 12,
                color: '#F7F7F9',
                borderWidth: 0,
                padding: 10,
                backgroundColor: '#F7F7F9',
              }}
              value={password}
              onChangeText={value => {
                setPassword(value);
              }}
            />
            <Text
              onPress={() => {
                navigationRef.navigate(ROUTES.FORGOTPASSWORD);
              }}
              style={{
                alignSelf: 'flex-end',
                color: '#0D6EFD',
                fontWeight: '500',
                marginTop: 16,
                right: 5,
              }}>
              Forgot Password?
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigationRef.navigate(ROUTES.PROFILE);
            }}
            style={{
              backgroundColor: '#0D6EFD',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
              width: 335,
              height: 56,
              borderRadius: 12,
              alignSelf: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}> Sign In</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={{
                  fontWeight: '400',
                  lineHeight: 16,
                  fontStyle: 'normal',
                  color: '#707B81',
                }}>
                Don't have an account?
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  lineHeight: 16,
                  fontStyle: 'normal',
                  color: '#0D6EFD',
                }}>
                Sign up
              </Text>
            </View>
            <Text
              style={{
                fontWeight: '400',
                lineHeight: 16,
                fontStyle: 'normal',
                color: '#707B81',
                marginTop: 20,
              }}>
              or Connect
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <Pressable
              onPress={() => {
                Linking.openURL('http://instagram.com');
              }}>
              <Image source={Facebook} resizeMode={'contain'} />
            </Pressable>
            <Pressable
              onPress={() => {
                Linking.openURL('https://www.facebook.com/');
              }}>
              <Image source={Instagram} />
            </Pressable>
            <Pressable
              onPress={() => {
                Linking.openURL('https://www.facebook.com/');
              }}>
              <Image source={Tweet} />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignIn;
