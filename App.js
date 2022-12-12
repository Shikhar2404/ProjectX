import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Store';
import {AppNavigation} from './src/Navigators/Application';

function App() {
  // const isLogin = false;
  // const isLogin = true;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
