import {StyleSheet, Platform} from 'react-native';

import {responsiveSize} from '../../utils/responsiveSize';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
export const styles = StyleSheet.create({
  textInputStyle: {
    color: Colors.white,
    fontSize: responsiveSize(20),
    fontFamily: Fonts.GilroyMedium,
    flex: 1,
    textAlignVertical: 'top',
    lineHeight:
      Platform.OS === 'android' ? responsiveSize(24) : responsiveSize(20),
    paddingVertical: 0,
    marginTop: Platform.OS === 'android' ? 6 : 0,
  },
  container: {
    color: Colors.white,
    width: '100%',
    borderRadius: responsiveSize(12),
    borderColor: Colors.primary,
    paddingHorizontal: responsiveSize(12),
    height: responsiveSize(48),
    borderWidth: 1,
    flexDirection: 'row',
  },
  icon: {
    height: responsiveSize(25),
    width: responsiveSize(25),
    resizeMode: 'contain',
    marginLeft: responsiveSize(10),
  },
  iconContainer: {
    alignSelf: 'center',
  },
});
