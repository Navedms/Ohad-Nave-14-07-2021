import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import WeatherScreen from '../screens/WeatherScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import routes from './routes';
import { RECORDING_OPTION_IOS_OUTPUT_FORMAT_AES3 } from 'expo-av/build/Audio';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={routes.MAIN}
                component={WeatherScreen}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <FontAwesome5
                            name="cloud-sun" size={size} color={color}
                        />
                }}
            />
            <Tab.Screen
                name={routes.FAVORITES}
                component={FavoritesScreen}
                options={{
                    tabBarIcon: ({ size, color }) =>
                        <MaterialCommunityIcons
                            name="heart" size={size} color={color}
                        />
                }}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;