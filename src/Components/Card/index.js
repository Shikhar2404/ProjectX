import React from 'react';
import {StyleSheet, Pressable} from 'react-native';

import {Colors} from '../../utils/colors';
import {responsiveSize} from '../../utils/responsiveSize';

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.ButtonBlue,
    borderRadius: responsiveSize(24),
    borderWidth: 1,
  },
});

export const Card = ({onPress, children, cardContainerStyle = {}}) => (
  <Pressable style={[styles.mainView, cardContainerStyle]} onPress={onPress}>
    {children}
  </Pressable>
);
