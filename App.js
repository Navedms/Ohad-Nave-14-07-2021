import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";
import logger from './app/utility/logger';

logger.start();

import { navigationRef } from './app/navigation/rootNavigation';
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <AppNavigator />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
}