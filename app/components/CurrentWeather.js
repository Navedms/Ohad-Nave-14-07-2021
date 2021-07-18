import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import Text from '../components/Text';
import defaultStyle from '../config/styles';
import dinamicIconFormat from './dinamicIconFormat';

function CurrentWeather({ city, data, onPress, unit, setUnit }) {

    let unitMark = data.Temperature[unit].Unit;
    let currentTemp = Math.round(data.Temperature[unit].Value);
    let max = Math.round(data.TemperatureSummary.Past24HourRange.Maximum[unit].Value);
    let min = Math.round(data.TemperatureSummary.Past24HourRange.Minimum[unit].Value);
    let wind = Math.round(data.Wind.Speed[unit].Value);
    let windUnit = data.Wind.Speed[unit].Unit;
    const handleSetUnit = () => {
        const result = unit === 'Metric' ? 'Imperial' : 'Metric';
        onPress();
        setUnit(result);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{city}</Text>
            <View style={[defaultStyle.flexDirectionRow, styles.tempContainer]}>
                <View style={defaultStyle.flexDirectionRow}>
                    <Text style={styles.currentTemp}>{currentTemp}</Text>
                    <MaterialCommunityIcons style={styles.degree} name="checkbox-blank-circle-outline" size={12} color={defaultStyle.colors.primary} />
                    <TouchableOpacity style={styles.unitContainer} onPress={handleSetUnit}>
                        <Text style={styles.unit}>{unitMark}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.minMaxContainer}>
                    <Text style={styles.minMax}>/ {min}°{unitMark} - {max}°{unitMark}</Text>
                </View>
            </View>
            <View style={styles.weantherInWordsContainer}>
                <Feather name={dinamicIconFormat.name(data.WeatherIcon)} size={50} color={dinamicIconFormat.color(data.WeatherIcon)} />
                <Text style={styles.weantherInWords}>{data.WeatherText}</Text>
            </View>
            <View style={[defaultStyle.flexDirectionRow, styles.extraDetailsContainer]}>
                <View style={[defaultStyle.flexDirectionRow, styles.extraDetails]}>
                    <MaterialCommunityIcons name="weather-windy" size={20} color={defaultStyle.colors.secondary} />
                    <Text style={styles.extraText}>{wind} {windUnit}</Text>
                </View>
                <View style={[defaultStyle.flexDirectionRow, styles.extraDetails]}>
                    <MaterialCommunityIcons name="water" size={20} color={defaultStyle.colors.secondary} />
                    <Text style={styles.extraText}>{data.RelativeHumidity}%</Text>
                </View>
                <View style={[defaultStyle.flexDirectionRow, styles.extraDetails, styles.extraDetailsLast]}>
                    <Text style={styles.extraTextUV}>UV Max</Text>
                    <Text style={styles.extraText}>{data.UVIndex}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        zIndex: -1,
    },
    title: {
        fontSize: 26,
        color: defaultStyle.colors.black,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 15,
    },
    tempContainer: {
        justifyContent: 'center',
        height: Platform.OS === "android" ? 78 : 74,
        marginTop: 30,
        marginBottom: 20,
    },
    currentTemp: {
        fontSize: 72,
        color: defaultStyle.colors.primary,
    },
    degree: {
        paddingTop: 16,
        marginLeft: Platform.OS === "android" ? 4 : -3,
        marginRight: Platform.OS === "android" ? -5 : 0,
    },
    unitContainer: {
        marginTop: 10,
        marginLeft: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: defaultStyle.colors.secondary,

    },
    unit: {
        fontSize: 18,
        fontWeight: 'bold',
        color: defaultStyle.colors.white,
    },
    minMaxContainer: {
        alignSelf: 'flex-end',
    },
    minMax: {
        marginLeft: Platform.OS === "android" ? 0 : -40,
        marginRight: Platform.OS === "android" ? -42 : 0,
        color: defaultStyle.colors.medium,
    },
    weantherInWordsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    weantherInWords: {
        fontSize: 22,
    },
    extraDetailsContainer: {
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    extraDetails: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
        borderRightWidth: Platform.OS === "android" ? 0 : 1,
        borderLeftWidth: Platform.OS === "android" ? 1 : 0,
        borderStyle: 'solid',
        borderColor: defaultStyle.colors.light,
    },
    extraDetailsLast: {
        borderRightWidth: 0,
        borderLeftWidth: 0,
    },
    extraText: {
        fontSize: 16,
        paddingLeft: 3,
        color: defaultStyle.colors.black,
    },
    extraTextUV: {
        fontSize: 8,
        width: 20,
        textAlign: 'center',
        lineHeight: 8,
        alignSelf: 'flex-end',
        color: defaultStyle.colors.secondary,
    }



});

export default CurrentWeather;