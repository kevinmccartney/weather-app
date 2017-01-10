import * as Types from '../constants'

export const setCoords = (coords) => {type: Types.SET_COORDS, coords}
export const setZip = (zip) => {type: Types.SET_ZIP, zip}
export const setCurrentWeather = (currentWeather) => {type: Types.SET_CURRENT_WEATHER, currentWeather}
export const setDailyWeather = (dailyWeather) => {type: Types.SET_DAILY_WEATHER, dailyWeather}
export const setForecast = (forecast) => {type: Types.SET_FORECAST, forecast}
