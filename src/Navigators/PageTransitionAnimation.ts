import {Platform} from 'react-native';

import {
  HeaderStyleInterpolators,
  StackCardInterpolationProps,
  StackNavigationOptions,
  TransitionSpecs,
} from '@react-navigation/stack';

export const horizontalAnimation: StackNavigationOptions = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, layouts}: StackCardInterpolationProps) => ({
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  }),
};

export const verticalAnimation: StackNavigationOptions = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open:
      Platform.OS === 'ios'
        ? TransitionSpecs.TransitionIOSSpec
        : TransitionSpecs.FadeInFromBottomAndroidSpec,
    close:
      Platform.OS === 'ios'
        ? TransitionSpecs.TransitionIOSSpec
        : TransitionSpecs.FadeOutToBottomAndroidSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
  cardStyleInterpolator: ({current, layouts}: StackCardInterpolationProps) => ({
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
          }),
        },
      ],
    },
  }),
};
