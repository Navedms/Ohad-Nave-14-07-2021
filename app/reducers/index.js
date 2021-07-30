import { combineReducers } from "redux";

import autoCompleteProp from "./locationAutoComplete_reducer";
import currentWeatherProp from "./currentWeather_reducer";
import fiveDaysProp from "./fiveDays_reducer";

const rootReducer = combineReducers({
    autoCompleteProp,
    currentWeatherProp,
    fiveDaysProp,
})

export default rootReducer;