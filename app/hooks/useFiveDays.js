import { useState } from 'react';

export default useFiveDays = (apiFunc) => {
    const [fiveData, setFiveData] = useState([]);
    const [fiveError, setFiveError] = useState(false);

    const request = async (...args) => {

        const response = await apiFunc(...args);

        if (response === undefined) {
            return setFiveError(true);
        }
        else {
            setFiveData(response.data?.DailyForecasts);
        }

        return response;
    };

    return { fiveData, fiveError, request };
};