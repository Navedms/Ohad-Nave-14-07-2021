import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';
import defaultStyle from "../config/styles";


function FiveDaysForecast({ dateItem, dayItem, minTemp, maxTemp, unit }) {

    return (

        <View style={[defaultStyle.flexDirectionRow, styles.container]}>

            <View style={styles.header}>
                <Text style={styles.dateItem}>{dateItem}</Text>
                <Text style={styles.dayItem}>{dayItem}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.minMaxItem}>{minTemp}° {unit} - {maxTemp}° {unit}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: defaultStyle.colors.light,
        height: 55,
        justifyContent: 'space-between',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    minMaxItem: {
        color: defaultStyle.colors.primary,
        fontSize: 18,
    },
    dateItem: {
        fontSize: 14,
        color: defaultStyle.colors.medium,

    },
    dayItem: {
        color: defaultStyle.colors.dark,
        fontSize: 16,
        fontWeight: '100',
    },
});

export default FiveDaysForecast;