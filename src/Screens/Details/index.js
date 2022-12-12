import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/colors';
import {Header} from '../../Components/Headers';
import {BookMarkWithBG, Loc5} from '../../Assets/Images';
import {responsiveSize, width} from '../../utils/responsiveSize';

const Details = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={Loc5} style={{flex: 1}}>
        <Header
          hasBackButton
          title={'Details'}
          titleTextStyle={{color: Colors.white}}
          hasRightIcon
          rightIcon={BookMarkWithBG}
        />
      </ImageBackground>

      <View style={styles.tvscreen}>
        <View style={styles.tvscreenMain} />
        <View style={styles.tvscreenTop} />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  tvscreen: {},
  tvscreenMain: {
    width: 150,
    height: 75,
    backgroundColor: 'red',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  tvscreenTop: {
    width: 73,
    height: 70,
    backgroundColor: 'red',
    position: 'absolute',
    top: -26,
    left: 39,
    borderRadius: 35,
    transform: [{scaleX: 2}, {scaleY: 0.5}],
  },
  tvscreenBottom: {
    width: 73,
    height: 70,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -26,
    left: 39,
    borderRadius: 35,
    transform: [{scaleX: 2}, {scaleY: 0.5}],
  },
  tvscreenLeft: {
    width: 20,
    height: 38,
    backgroundColor: 'red',
    position: 'absolute',
    left: -7,
    top: 18,
    borderRadius: 35,
    transform: [{scaleX: 0.5}, {scaleY: 2}],
  },
  tvscreenRight: {
    width: 20,
    height: 38,
    backgroundColor: 'red',
    position: 'absolute',
    right: -7,
    top: 18,
    borderRadius: 35,
    transform: [{scaleX: 0.5}, {scaleY: 2}],
  },
});
