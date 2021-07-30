import { useState } from 'react';

export default useAutoComp = (apiFunc) => {
    const [search, setSearch] = useState('');
    const [autoCompVisible, setAutoCompVisible] = useState(false);

    const handleSelectCity = (item) => {
        setSearch(item.LocalizedName);
        setAutoCompVisible(false);
    }

    const canceAutoCompMode = () => {
        autoCompVisible ? setAutoCompVisible(false) : undefined;
    }

    return { search, setSearch, handleSelectCity, autoCompVisible, setAutoCompVisible, canceAutoCompMode };
};