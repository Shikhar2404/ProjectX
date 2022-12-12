/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
 import {
    CommonActions,
    createNavigationContainerRef,
    StackActions,
  } from '@react-navigation/native'
  
  export const navigationRef = createNavigationContainerRef()
  
  export const navigate = (name, params) => {
    console.log('Navigate Called ==>', navigationRef.isReady(), name, params)
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params)
    }
  }
  
  export const push = (name, params) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.push(name, params))
    }
  }
  
  export const pop = (name, params) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.pop())
    }
  }
  
  export const goBack = () => {
    if (navigationRef.canGoBack()) {
      navigationRef.goBack()
    }
  }
  
  export const navigateAndReset = (routes = [], index = 0) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index,
          routes,
        }),
      )
    }
  }
  
  export const navigateAndSimpleReset = (name, index = 0) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index,
          routes: [{ name }],
        }),
      )
    }
  }
  
  export const navigateAndSimpleResetWithParams = (name, params, index = 0) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index,
          routes: [{ name }, { ...params }],
        }),
      )
    }
  }
  