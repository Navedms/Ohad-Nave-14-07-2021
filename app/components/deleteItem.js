import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from '../components/Text';
import colors from '../config/colors';


function DeleteItem({ title, iconName, iconColor = colors.dark, iconSize = 26, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        left: 0,
        height: 110,
        width: '100%',
        zIndex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    title: {
        marginTop: 5,
        fontSize: 14,
        color: colors.dark,
    }
});

export default DeleteItem;