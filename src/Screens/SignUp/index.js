import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Facebook, Instagram, Tweet} from '../../Assets/Images';
import {goBack, navigationRef} from '../../Navigators/utils';
import {ROUTES} from '../../utils/constants';
import {Header} from '../../Components/Headers';
import {useDispatch} from 'react-redux';
import {userLogin} from '../../Store/reducer/User';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <StatusBar barStyle={'dark-content'} animated={true} />
      <ScrollView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        <Header
          hasBackButton={true}
          onPress={() => {
            goBack();
          }}
        />

        <View
          style={{
            marginTop: 40,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '800', color: 'black', fontSize: 26}}>
            Sign up now
          </Text>
          <Text style={{marginTop: 12, fontSize: 16}}>
            Please fill the details and create account
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
              placeholder="First Name"
              placeholderTextColor={'black'}
              style={{
                marginTop: 18,
                width: 335,
                height: 56,
                borderRadius: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#F7F7F9',
                borderColor: '#F7F7F9',
              }}
              value={firstName}
              onChangeText={value => {
                setFirstName(value);
              }}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={'black'}
              style={{
                marginTop: 18,
                width: 335,
                height: 56,
                borderRadius: 12,
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#F7F7F9',
                borderColor: '#F7F7F9',
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
                borderWidth: 1,
                padding: 10,
                backgroundColor: '#F7F7F9',
                borderColor: '#F7F7F9',
              }}
              value={password}
              onChangeText={value => {
                setPassword(value);
              }}
            />

            <Text
              style={{
                alignSelf: 'flex-start',
                fontWeight: '500',
                marginTop: 16,
                fontSize: 14,
                left: 5,
              }}>
              Password must be 8 charchters
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              console.log('ActionCalled');
              dispatch(
                userLogin({
                  userName: 'Sumit',
                  email: 'skumar@innow8apps.com',
                  password: 'Test@123',
                }),
              );
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
            <Text style={{color: 'white', fontSize: 16}}>Sign Up</Text>
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
                onPress={() => {
                  navigationRef.navigate(ROUTES.SIGNIN);
                }}
                style={{
                  fontWeight: '400',
                  lineHeight: 16,
                  fontStyle: 'normal',
                  color: '#0D6EFD',
                  left: 2,
                }}>
                Sign In
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
              marginTop: 60,
            }}>
            <Image source={Facebook} />
            <Image source={Instagram} />
            <Image source={Tweet} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;
