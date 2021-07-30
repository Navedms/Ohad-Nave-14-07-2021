import { useState } from 'react';

export default useCurrent = () => {
    const [loading, setLoading] = useState(false);
    const [currentKey, setCurrentKey] = useState();
    const [favoritIconColor, setFavoritIconColor] = useState();
    const [unit, setUnit] = useState('Metric');


    return { currentKey, setCurrentKey, loading, setLoading, setFavoritIconColor, favoritIconColor, unit, setUnit };
};