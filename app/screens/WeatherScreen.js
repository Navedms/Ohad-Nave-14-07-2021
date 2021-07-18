import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";
import dayjs from "dayjs";

import Activityindicator from '../components/Activityindicator';
import TouchScreen from '../components/TouchScreen';
import TextInput from '../components/AppTextInput';
import AutoComplete from '../components/AutoComplete';
import NoResults from '../components/NoResults';
import CurrentWeather from '../components/CurrentWeather';
import showRemove from '../components/showRemove';
import showAdd from '../components/showAdd';
import FiveDaysForecast from '../components/FiveDaysForecast';

import locationAutocomplete from '../api/locationAutocomplete';
import currentWeatherApi from '../api/currentWeather';
import fiveDaysApi from '../api/fiveDays';
import api from '../api/configAPI';
import useAutoComp from '../hooks/useAutoComp';
import useCurrent from '../hooks/useCurrent';
import useFiveDays from '../hooks/useFiveDays';
import defaultStyle from "../config/styles";
import favoritesStore from '../utility/favoritesStore';


function WeatherScreen({ navigation, route }) {
    const current = route.params;
    const { data, autoError, handleSearchChange, search, handleSelectCity, autoCompVisible, canceAutoCompMode } = useAutoComp(locationAutocomplete.get);
    const { currentKey, setCurrentKey, currentData, error, loading, request: handleShowCurrent, buttonDisabledFavorit, setFavoritIconColor, favoritIconColor, unit, setUnit } = useCurrent(currentWeatherApi.get);
    const { fiveData, fiveError, request: handleShowFiveDays } = useFiveDays(fiveDaysApi.get);
    const isFocused = useIsFocused();



    useEffect(() => {
        const isCurrent = current === undefined ? api.defaultItem : current;
        handleSelectCityAndShowCurrent(isCurrent);
        handleFavotirIconColor(isCurrent.Key);
    }, [navigation, isFocused]);

    const handleFavotirIconColor = async (currentKey) => {
        const response = await favoritesStore.get('favorites');
        if (!response) return setFavoritIconColor(defaultStyle.colors.medium);

        const isExisit = response.some((item) => {
            return item.Key === currentKey;
        })

        setFavoritIconColor(isExisit ? defaultStyle.colors.favorit : defaultStyle.colors.medium)
    }

    const handleSelectCityAndShowCurrent = (item) => {
        handleSelectCity(item);
        setCurrentKey(item.Key);
        handleShowCurrent(item.Key, true);
        handleFavotirIconColor(item.Key);
        handleShowFiveDays(item.Key, unitLogic(unit));
    }
    const unitLogic = () => {
        return unit === 'Metric' ? true : false;
    }

    const handleOnPressUnitChangeFiveDays = () => {
        handleShowFiveDays(currentKey, !unitLogic(unit));
    }

    const handleAddRemoveFavorit = async () => {
        const list = [
            {
                Key: currentKey,
                LocalizedName: search,
            }
        ];

        const response = await favoritesStore.get('favorites');
        if (!response) {
            favoritesStore.store('favorites', list);
            setFavoritIconColor(defaultStyle.colors.favorit);
            return showAdd(`${list[0].LocalizedName} has been successfully added to the favorites list`);
        }
        else {
            const isExisit = response.some((item) => {
                return item.Key === list[0].Key;
            })

            if (isExisit) {
                const response = await favoritesStore.get('favorites');
                const newList = response.map((item) => {
                    if (item.Key !== list[0].Key) return item;
                });
                favoritesStore.remove('favorites', newList);
                setFavoritIconColor(defaultStyle.colors.medium);
                return showRemove(`${list[0].LocalizedName} was successfully removed from the favorites list`);
            }

            else {
                favoritesStore.store('favorites', list);
                setFavoritIconColor(defaultStyle.colors.favorit);
                return showAdd(`${list[0].LocalizedName} has been successfully added to the favorites list`);
            }
        }
    };


    return (
        <TouchScreen style={styles.container} onPress={() => canceAutoCompMode()}>
            <Activityindicator visible={loading} />
            <View style={[defaultStyle.flexDirectionRow, styles.header]}>
                <View style={styles.searchContainer}>
                    <TextInput value={search} placeholder="Search by city name" onChangeText={handleSearchChange} icon="map-search-outline" />
                    {autoCompVisible &&
                        <View style={styles.autoComplete}>
                            <FlatList
                                data={data}
                                showsVerticalScrollIndicator={true}
                                keyExtractor={(item) => item.Key.toString()}
                                renderItem={({ item }) => (
                                    <AutoComplete name={item.LocalizedName} onPress={() => handleSelectCityAndShowCurrent(item)} />
                                )}
                            />
                        </View>}
                </View>
                {currentData.length > 0 && <TouchableOpacity style={styles.favorit} disabled={buttonDisabledFavorit} onPress={handleAddRemoveFavorit}>
                    <MaterialCommunityIcons name="heart" size={36} color={favoritIconColor} />
                </TouchableOpacity>}
            </View>
            {error && <NoResults title="CAN'T DISPLAY CURRENT WEATHER" text="Sorry we had a server issue. Please try again." iconName='alert' flex={false} />}
            {currentData.length > 0 && <CurrentWeather city={search} data={currentData[0]} onPress={(unit) => handleOnPressUnitChangeFiveDays(unit)} unit={unit} setUnit={setUnit} />}
            <View style={styles.fiveDaysContainer}>
                {fiveData.length > 0 && <FlatList
                    data={fiveData}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={(item) => item.EpochDate.toString()}
                    renderItem={({ item }) => (
                        <FiveDaysForecast dateItem={dayjs(item.Date).format('DD/MM')} dayItem={dayjs(item.Date).format('ddd')} minTemp={Math.round(item.Temperature.Minimum.Value)} maxTemp={Math.round(item.Temperature.Maximum.Value)} unit={item.Temperature.Minimum.Unit} />
                    )}
                />}
            </View>
        </TouchScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        width: '100%',
        justifyContent: 'flex-start',
    },
    searchContainer: {
        width: '85%',
        paddingHorizontal: 8,
    },
    favorit: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
    },
    autoComplete: {
        maxHeight: 190,
        backgroundColor: defaultStyle.colors.light,
        position: 'absolute',
        top: 30,
        left: 8,
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 10,
        paddingBottom: 15,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        zIndex: 1,
    },
    fiveDaysContainer: {
        marginTop: 34,
        width: '100%',
    }
});

export default WeatherScreen;