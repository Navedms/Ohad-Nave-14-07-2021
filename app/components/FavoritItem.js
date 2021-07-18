import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import currentWeatherApi from '../api/currentWeather';
import Text from './Text';
import defaultStyle from "../config/styles";


function FavoritItem({ cityId, city, onPress, onLongPress, deleteMode, selectedIcon, colorIcon }) {

    const [weantherInWords, setWeantherInWords] = useState('');
    const [currentTemp, setCurrentTemp] = useState(0);

    const apiCurrentInfo = async () => {
        const response = await currentWeatherApi.get(cityId, false);
        if (response === undefined) {
            setWeantherInWords('Error displaying data');
            setCurrentTemp(0);
        }
        else {
            setWeantherInWords(response.data[0].WeatherText);
            setCurrentTemp(Math.round(response.data[0].Temperature.Metric.Value));
        }
    }

    useEffect(() => {
        apiCurrentInfo();
    }, []);

    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
            <View style={[defaultStyle.flexDirectionRow, styles.container]}>

                <View style={styles.header}>
                    <Text style={styles.title}>{city}</Text>
                </View>
                {!deleteMode && <View style={[styles.description, defaultStyle.flexDirectionRow]}>
                    <Text style={styles.weantherInWords}>{weantherInWords}</Text>
                    <Text style={styles.currentTemp}>{currentTemp}°</Text>
                </View>}

                <View style={styles.status}>
                    {deleteMode && <MaterialCommunityIcons name={selectedIcon} size={28} color={colorIcon} />}
                </View>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: defaultStyle.colors.light,
        height: 70,
        justifyContent: 'space-between',
    },
    header: {
        justifyContent: 'center',
    },
    description: {
        alignItems: 'center',
    },
    currentTemp: {
        color: defaultStyle.colors.primary,
        fontSize: 28,
        fontWeight: "bold",
    },
    title: {
        fontSize: 18,
        color: defaultStyle.colors.black,
        fontWeight: 'bold',

    },
    weantherInWords: {
        color: defaultStyle.colors.dark,
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: '100',
    },
    status: {
        position: 'absolute',
        right: 20,
        top: '50%',

    },
});

export default FavoritItem;