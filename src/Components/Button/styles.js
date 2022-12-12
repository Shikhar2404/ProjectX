import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

import {responsiveSize} from './../../utils/responsiveSize';

export const styles = StyleSheet.create({
  textStyleDefault: {
    color: Colors.white,
    fontSize: responsiveSize(19),
    fontFamily: 'Avenir',
    lineHeight: 20,
  },
  container: {
    backgroundColor: Colors.darkLiver,
    width: '100%',
    borderRadius: responsiveSize(12),
    paddingVertical: responsiveSize(18),
    marginTop: responsiveSize(85),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
