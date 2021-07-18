import { useState } from 'react';

export default useCurrent = (apiFunc) => {
    const [currentData, setCurrentData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [buttonDisabledFavorit, setButtonDisabledFavorit] = useState(true);
    const [currentKey, setCurrentKey] = useState();
    const [favoritIconColor, setFavoritIconColor] = useState();
    const [unit, setUnit] = useState('Metric');

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false);
        if (response === undefined) {
            return setError(true)
        }
        else {
            setCurrentData(response.data);
            setButtonDisabledFavorit(false);
        }
        return response;
    };

    return { currentKey, setCurrentKey, currentData, error, loading, request, buttonDisabledFavorit, setFavoritIconColor, favoritIconColor, unit, setUnit };
};