/* eslint-disable react/prop-types */
import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';

import PropTypes from 'prop-types';

import {Arrow as HeaderBackArrow} from '../../Assets/Images';

import Divider from '../Divider';

import {styles} from './styles';
import {responsiveSize} from './../../utils/responsiveSize';

export const Header = ({
  rightTitle,
  onRightTitlePress,
  title,
  hasBackButton,
  onPress,
  hasRightIcon,
  rightIcon,
  onIconPress,
  hasRightTitle,
  isDivider,
  titleTextStyle,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContainerForTitle}>
        <Text style={[styles.heading, titleTextStyle || {}]}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            width: '100%',
            paddingHorizontal: responsiveSize(20),
          }}>
          {hasBackButton && (
            <Pressable hitSlop={20} onPress={onPress}>
              <Image
                source={HeaderBackArrow}
                style={{
                  height: responsiveSize(44),
                  width: responsiveSize(44),
                  resizeMode: 'contain',
                }}
              />
            </Pressable>
          )}

          {hasRightIcon && (
            <Pressable hitSlop={20} onPress={onIconPress}>
              <Image
                source={rightIcon}
                style={{
                  height: responsiveSize(44),
                  width: responsiveSize(44),
                  resizeMode: 'contain',
                }}
              />
            </Pressable>
          )}

          {hasRightTitle && (
            <Text onPress={onRightTitlePress} style={styles.rightTitle}>
              {rightTitle}
            </Text>
          )}
        </View>
      </View>

      {isDivider && <Divider />}
    </View>
  );
};

Header.defaultProps = {
  rightTitle: '',
  title: '',
  hasBackButton: false,
  hasRightIcon: true,
  titleTextStyle: true,
};
Header.propTypes = {
  rightTitle: PropTypes.string,
  title: PropTypes.string,
  hasBackButton: PropTypes.bool,
  hasRightIcon: PropTypes.bool,
  isDivider: PropTypes.bool,
};
