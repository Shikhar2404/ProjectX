import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './reducer/CounterReducer';
import userSlice from './reducer/User';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootReducer = combineReducers({
  counterSlice,
  userSlice,
});
const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  debug: true, // to get useful logging
};
const middleware = [];

if (__DEV__) {
  middleware.push(
    createLogger({
      collapsed: true,
      duration: true,
      timestamp: true,
      colors: {
        title: () => '#F2789F',
        prevState: () => '#de6f0d',
        action: () => '#CAB8FF',
        nextState: () => '#1a9134',
      },
    }),
  );
}

const enhancers = [...middleware];

const persistConfig = {...enhancers};
const persistedReducer = persistReducer(config, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
});

store.subscribe(() => console.log(store.getState()));

export {store, persistor};
