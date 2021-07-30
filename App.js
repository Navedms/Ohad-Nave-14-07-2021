import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import { navigationRef } from './app/navigation/rootNavigation';
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from './app/navigation/AppNavigator';
import reducers from './app/reducers';

import logger from './app/utility/logger';
logger.start();

export default function App() {

  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <AppNavigator />
        <FlashMessage position="bottom" />
      </NavigationContainer>
    </Provider>
  );
}