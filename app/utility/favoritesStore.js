import AsyncStorage from '@react-native-async-storage/async-storage';

import logger from './logger';

const store = async (key, value) => {
    try {
        const oldValue = await AsyncStorage.getItem(key);
        const oldItem = JSON.parse(oldValue);

        let merged = oldItem ? [...oldItem, ...value] : value;
        await AsyncStorage.setItem(key, JSON.stringify(merged));
    } catch (error) {
        logger.log(error);
    }
}

const remove = async (key, list) => {

    try {
        const filtered = list.filter((ud) => {
            return ud != null;
        });
        if (filtered[0] === undefined)
            return await AsyncStorage.removeItem(key);
        else {
            return await AsyncStorage.setItem(key, JSON.stringify(filtered));
        }

    } catch (error) {
        logger.log(error);
    }
};

const removeMulti = async (key, list) => {
    const all = list.every((item) => {
        return item.delete
    })
    if (all) await AsyncStorage.removeItem(key);
    else {
        const newList = list.map((item) => {

            if (item.delete === false) return item;
        });
        const filtered = newList.filter((ud) => {
            return ud != null;
        });
        return await AsyncStorage.setItem(key, JSON.stringify(filtered));
    }
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        const item = JSON.parse(value);
        if (!item) return null;
        return item;

    } catch (error) {
        logger.log(error);
    }
}

export default {
    store,
    get,
    remove,
    removeMulti,
}