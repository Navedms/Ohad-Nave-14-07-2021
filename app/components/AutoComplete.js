import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../config/colors';

import Text from './Text';

function AutoComplete({ name, onPress, color = colors.medium }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={[styles.text, { color: color }]}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    text: {
        paddingStart: 52,
        paddingVertical: 2,
    }
});

export default AutoComplete;