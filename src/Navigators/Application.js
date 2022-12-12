import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {horizontalAnimation} from './src/Navigators/PageTransitionAnimation';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '../Screens/SignIn/index';
import SignUp from '../Screens/SignUp/index';
import ForgotPassword from '../Screens/ForgotPassword/index';
import OnBoarding from '../Screens/Onboarding/index';
import OtpScreen from '../Screens/OneTimePassword/index';
import NotificationScreen from '../Screens/Notifications/index';
import {navigationRef} from './utils';
import Profile from '../Screens/Profile/index';
import EditProfile from '../Screens/EditProfile/index';
import HomeScreen from '../Screens/BottomTabScreens/Home/index';
import {ROUTES} from '../utils/constants';

import SplashScreen from 'react-native-splash-screen';
import Details from '../Screens/Details/index';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, detachPreviousScreen: false}}>
      <Stack.Screen name={ROUTES.ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={ROUTES.OTPSCREEN} component={OtpScreen} />
      <Stack.Screen name={ROUTES.SIGNIN} component={SignIn} />
      <Stack.Screen name={ROUTES.SIGNUP} component={SignUp} />
      <Stack.Screen name={ROUTES.FORGOTPASSWORD} component={ForgotPassword} />

      <Stack.Screen
        name={ROUTES.NOTIFICATIONS}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

const LoggedInStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, detachPreviousScreen: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name={ROUTES.DETAILS} component={Details} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
      <Stack.Screen name={ROUTES.EDITPROFILE} component={EditProfile} />
      <Stack.Screen
        name={ROUTES.NOTIFICATIONS}
        component={NotificationScreen}
      />
    </Tab.Navigator>
  );
};

export const AppNavigation = () => {
  const {isLoggedIn} = useSelector(state => state.userSlice);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        SplashScreen.hide();
      }}>
      <Stack.Navigator
        screenOptions={{headerShown: false, detachPreviousScreen: false}}>
        {isLoggedIn ? (
          <Stack.Screen name={ROUTES.LOGGEDINSTACK} component={LoggedInStack} />
        ) : (
          <Stack.Screen name={ROUTES.AUTHSTACK} component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
