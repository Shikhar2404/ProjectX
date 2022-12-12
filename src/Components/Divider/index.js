import React from 'react';
import {StyleSheet, View} from 'react-native';
import {responsiveSize} from '../../utils/responsiveSize';

const Divider = dividerStyles => (
  <View style={[styles.hr, dividerStyles || {}]} />
);

const styles = StyleSheet.create({
  hr: {
    backgroundColor: 'silver',
    height: responsiveSize(1),
    marginVertical: responsiveSize(20),
    // marginTop: responsiveSize(30),
    opacity: 0.2,
  },
});

export default Divider;
