/* eslint-disable react/destructuring-assignment */
import React, {Component} from 'react';
import {
  /*Modal,*/ StyleSheet,
  Animated,
  View,
  PanResponder,
} from 'react-native';

import {Colors} from '../../utils/colors';
import Modal from 'react-native-modalbox';
import {height} from '../../utils/responsiveSize';
import {responsiveSize} from '../../utils/responsiveSize';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: '#333333',
    paddingTop: responsiveSize(12),
    borderTopRightRadius: responsiveSize(30),
    borderTopLeftRadius: responsiveSize(30),
  },
  handleBar: {
    width: responsiveSize(80),
    height: responsiveSize(6),
    backgroundColor: Colors.silver,
    borderRadius: responsiveSize(20),
    alignSelf: 'center',
  },
});

export class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panY: new Animated.Value(height),
    };
    this._resetPositionAnim = Animated.timing(this.state.panY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    });
    this._closeAnim = Animated.timing(this.state.panY, {
      toValue: height,
      duration: 500,
      useNativeDriver: false,
    });
    this._panResponders = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, {dy: this.state.panY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return this._closeAnim.start(() => this.props.onDismiss());
        }
        return this._resetPositionAnim.start();
      },
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.visible !== this.props.visible && this.props.visible) {
      this._resetPositionAnim.start();
    }
  }

  _handleDismiss() {
    // this._closeAnim.start(() => this.props.onDismiss())
    this.props.onDismiss();
  }

  render() {
    const top = this.state.panY.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 0, 1],
    });
    return (
      // <Modal
      //   animated
      //   transparent
      //   animationType="fade"
      //   visible={this.props.visible}
      //   onRequestClose={() => this._handleDismiss()}
      // >
      <Modal
        isOpen={this.props.visible}
        position={'bottom'}
        backButtonClose={true}
        entry={'bottom'}
        style={{backgroundColor: 'transparent', height: 200}}
        onClosed={() => this._handleDismiss()}
        coverScreen={true}>
        {/* <View style={styles.overlay} {...this._panResponders.panHandlers}> */}
        <View style={[styles.container]}>
          <View style={styles.handleBar} />
          {this.props.children}
        </View>
        {/* </View> */}
      </Modal>
    );
  }
}

export default BottomSheet;
