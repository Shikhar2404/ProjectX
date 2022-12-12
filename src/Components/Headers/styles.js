import {StyleSheet} from 'react-native';
import {responsiveSize, respFontSize} from '../../utils/responsiveSize';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
  },
  headerContainerForTitle: {
    marginTop: responsiveSize(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: respFontSize(17),
    alignSelf: 'center',
    fontWeight: '600',
    color: Colors.BLACK,
    // marginTop: responsiveSize(10),
  },
  rightTitle: {
    fontSize: respFontSize(16),
    fontWeight: '600',
    color: Colors.ButtonBlue,
  },
});
