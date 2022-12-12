import {Pressable, StyleSheet, Text, View} from 'react-native';

import React, {useEffect, useRef, useState} from 'react';

import {Header} from '../../Components/Headers';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Colors} from '../../utils/colors';
const OtpScreen = () => {
  const [otp, setOtp] = useState('');
  const [isbuttonEnabled, setbuttonEnabled] = useState(false);

  return (
    <>
      <Header hasBackButton={true} />
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
          }}>
          <Text
            style={{
              color: Colors.BLACK,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 26,
            }}>
            OTP Verification
          </Text>
          <Text
            style={{marginTop: 12, color: Colors.silver, textAlign: 'center'}}>
            Please check your email www.uihut@gmail.com to see the verification
            code
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 28,
              left: 20,
            }}>
            OTP Code
          </Text>

          <View
            style={{
              alignSelf: 'center',
              // justifyContent: 'center',
              // backgroundColor: 'red',
            }}>
            <OTPInputView
              keyboardType="number-pad"
              style={{
                width: '80%',
                height: 100,
                alignSelf: 'center',
              }}
              pinCount={4}
              code={otp}
              // onCodeChanged={va => {
              //   setOtp(va);
              // }}
              selectionColor={Colors.ButtonBlue}
              placeholderTextColor={'red'}
              autoFocusOnLoad
              codeInputFieldStyle={{borderRadius: 12}}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              // onCodeFilled={code => {
              //   console.log(`Code is ${code}, you are good to go!`);
              // }}
            />

            <Pressable
              style={{
                width: 335,
                height: 56,
                borderRadius: 15,
                backgroundColor: Colors.ButtonBlue,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{color: Colors.white, fontSize: 16, fontWeight: '600'}}>
                Verify
              </Text>
            </Pressable>
            <View
              style={{
                marginTop: 16,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{color: Colors.silver, fontSize: 16, fontWeight: '400'}}>
                Resend code to
              </Text>
              <Text
                style={{color: Colors.silver, fontSize: 14, fontWeight: '400'}}>
                01:26
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '##F7F7F9',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '##F7F7F9',
  },
});
