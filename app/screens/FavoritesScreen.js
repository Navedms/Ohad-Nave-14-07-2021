import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import Activityindicator from '../components/Activityindicator';
import TouchScreen from '../components/TouchScreen';
import NoResults from '../components/NoResults';
import DeleteItem from '../components/deleteItem';
import FavoritItem from '../components/FavoritItem';
import defaultStyle from "../config/styles";
import favoritesStore from '../utility/favoritesStore';
import logger from '../utility/logger';
import routes from '../navigation/routes';

function FavoritesScreen({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [favoritesList, setFavoritesList] = useState([]);
    const [deleteMode, setDeleteMode] = useState(false);
    const isFocused = useIsFocused();

    const apiFavoritesList = async () => {
        try {
            const response = await favoritesStore.get('favorites');

            setLoading(false);
            setFavoritesList(response);

        } catch (error) {
            logger.log(error);
        }

    }

    useEffect(() => {
        setLoading(true);
        apiFavoritesList();
    }, [navigation, isFocused]);


    const handleOnLongPress = (item) => {
        const resetTheList = favoritesList.forEach((status) => {
            status.delete = false;
            item.delete = true;
        });
        setFavoritesList(favoritesList);

        setDeleteMode(true);
    }
    const handleOnPress = (item) => {
        if (deleteMode) {
            const resetTheList = favoritesList.map((status) => {
                if (item.Key === status.Key) { status.delete = !status.delete }
                return status;
            });
            setFavoritesList(resetTheList);

        } else {
            setTimeout(() => { navigation.navigate(routes.MAIN, item); }, 200);
        }
    }

    const cancelDeletMode = () => {
        deleteMode ? setDeleteMode(false) : undefined;
    }

    const handleDeletePress = () => {
        favoritesStore.removeMulti('favorites', favoritesList)
        apiFavoritesList();
        setDeleteMode(false);
    }
    const selectedIcon = (status) => {
        return status ? 'check-circle' : 'checkbox-blank-circle-outline';
    }
    const selectedColorIcon = (status) => {
        return status ? defaultStyle.colors.secondary : defaultStyle.colors.medium;
    }

    return (

        <TouchScreen onPress={() => cancelDeletMode()}>

            <Activityindicator visible={loading} />
            {!favoritesList && !loading &&
                <NoResults title="The list is empty" text="Looks like you haven't added any favorite cities yet" iconName="map-marker" />}
            {favoritesList && !loading && <FlatList
                data={favoritesList}
                keyExtractor={(item) => item.Key.toString()}
                renderItem={({ item }) => (
                    <FavoritItem
                        cityId={item.Key}
                        city={item.LocalizedName}
                        onPress={() => handleOnPress(item)}
                        onLongPress={() => handleOnLongPress(item)}
                        deleteMode={deleteMode}
                        selectedIcon={selectedIcon(item.delete)}
                        colorIcon={selectedColorIcon(item.delete)}
                    />
                )}
            />}
            {deleteMode && <DeleteItem title='Delete' iconName="trash-can-outline" onPress={handleDeletePress} />}

        </TouchScreen>
    );
}

export default FavoritesScreen;