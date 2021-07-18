import { useState } from 'react';

export default useAutoComp = (apiFunc) => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [autoCompVisible, setAutoCompVisible] = useState(false);
    const [autoError, setAutoError] = useState(false);

    const request = async (...args) => {
        const response = await apiFunc(...args);
        if (response === undefined) { return setAutoError(true); }
        else {
            setData(response.data);
            data && data.length > 0 && setAutoCompVisible(true);
        }
        return response;
    };

    const handleSearchChange = (text) => {
        setSearch(text);
        request(text);
    }

    const handleSelectCity = (item) => {
        setSearch(item.LocalizedName);
        setAutoCompVisible(false);
    }

    const canceAutoCompMode = () => {
        autoCompVisible ? setAutoCompVisible(false) : undefined;
    }

    return { data, autoError, handleSearchChange, search, handleSelectCity, autoCompVisible, canceAutoCompMode };
};