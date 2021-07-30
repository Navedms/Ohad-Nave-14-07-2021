import locationAutocomplete from '../api/locationAutocomplete';
import currentWeatherApi from '../api/currentWeather';
import fiveDaysApi from '../api/fiveDays';

import types from './types';

export const AutoCompleteApiAction = async (text) => {
    const response = await locationAutocomplete.get(text);
    if (response === undefined) {
        return {
            type: types.GET_AUTO_COMPLETE,
            payload: { data: 'error' }
        }
    }
    else {
        return {
            type: types.GET_AUTO_COMPLETE,
            payload: response.data
        }
    }
}

export const WeatherApiAction = async (key, details) => {
    const response = await currentWeatherApi.get(key, details);
    if (response === undefined) {
        return {
            type: types.GET_CURRENT_WEATHER,
            payload: { data: 'error' }
        }
    }
    else {
        return {
            type: types.GET_CURRENT_WEATHER,
            payload: response.data
        }
    }
}

export const FiveDaysApiAction = async (key, details) => {
    const response = await fiveDaysApi.get(key, details);
    if (response === undefined) {
        return {
            type: types.GET_FIVE_DAYS,
            payload: { data: 'error' }
        }
    }
    else {
        return {
            type: types.GET_FIVE_DAYS,
            payload: response.data.DailyForecasts
        }
    }
}