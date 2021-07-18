import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyle from "../config/styles";

function AppTextInput({ icon, size = defaultStyle.iconSize, color = defaultStyle.colors.dark, value, ...otherProps }) {
    return (
        <View style={[defaultStyle.flexDirectionRow, styles.container]}>
            {icon && <MaterialCommunityIcons name={icon} size={size} color={color} style={styles.icon} />}
            <TextInput value={value} style={[defaultStyle.text, styles.input]} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.light,
        borderRadius: 20,
        width: '100%',
        paddingVertical: 12,
        marginVertical: 6,
        justifyContent: 'flex-start',
        zIndex: 2,
    },
    icon: {
        marginHorizontal: 20,
    },
    input: {
        textAlign: 'left',
        marginHorizontal: 0,
        color: defaultStyle.colors.dark,
        flex: 1,
        flexWrap: 'wrap',
    }

});

export default AppTextInput;