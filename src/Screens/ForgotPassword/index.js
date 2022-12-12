import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Header} from '../../Components/Headers';
import {Colors} from '../../utils/colors';
import Modal from 'react-native-modalbox';
import {modalIcon} from '../../Assets/Images';
import {Fonts} from '../../utils/fonts';
import {goBack, navigationRef} from '../../Navigators/utils';

const ForgotPassword = () => {
  const [mail, setMail] = useState('');
  const [isModal, setIsModal] = useState(false);

  const addModal = useRef(null);

  var screen = Dimensions.get('window');

  return (
    <View style={{flex: 1}}>
      <Header
        hasBackButton={true}
        onPress={() => {
          goBack();
        }}
      />
      <View
        style={{
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: Colors.BLACK,
            fontWeight: '600',
            fontSize: 26,
          }}>
          Forgot password
        </Text>
        <Text
          style={{
            marginTop: 12,
            color: Colors.silver,
            fontWeight: '400',
            fontSize: 16,
          }}>
          Enter your email account to reset
        </Text>
        <Text
          style={{
            color: Colors.silver,
            fontWeight: '400',
            fontSize: 16,
          }}>
          your password
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
          alignItems: 'center',
        }}>
        <TextInput
          placeholderTextColor={Colors.BLACK}
          placeholder="Email"
          returnKeyType="next"
          returnKeyLabel="done"
          style={{
            backgroundColor: Colors.white,
            width: 335,
            height: 56,
            borderRadius: 15,
            paddingHorizontal: 10,
          }}
          value={mail}
          onChangeText={value => {
            setMail(value);
          }}
        />
        <Pressable
          onPress={() => {
            setIsModal(true);
          }}
          style={{
            marginTop: 40,
            borderRadius: 15,
            backgroundColor: Colors.ButtonBlue,
            width: 335,
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: Colors.white, fontWeight: '600'}}>
            Reset Password
          </Text>
        </Pressable>
      </View>
      <Modal
        backButtonClose={true}
        onClosed={() => setIsModal(false)}
        coverScreen={true}
        style={{
          borderRadius: 15,
          width: screen.width - 80,
          height: 200,
          justifyContent: 'center',
        }}
        backdrop={true}
        position="center"
        entry={'bottom'}
        backdropOpacity={0.5}
        isOpen={isModal}
        animationType="slide"
        backdropColor="black">
        <View
          style={{
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderRadius: 15,
              backgroundColor: Colors.white,
              alignSelf: 'center',
              height: 206,
              width: 335,
              alignItems: 'center',
            }}>
            <Image source={modalIcon} style={{marginTop: 30}} />

            <View
              style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Check your email
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 8,
                  fontSize: 16,
                  fontWeight: '400',
                  color: Colors.silver,
                }}>
                We have send password recovery instruction to your email
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
