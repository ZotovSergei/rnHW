import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/store/store';

const rootStore = store();

const RootComponent = () => {
  return (
    <Provider store={rootStore}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => RootComponent);
