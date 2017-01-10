import coords from './setCoords'
import currentWeather from './setCurrentWeather'
import dailyWeather from './setDailyWeather'
import forecast from './setForecast'
import zip from './setZip'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  coords,
  currentWeather,
  dailyWeather,
  forecast,
  zip
})

export default rootReducer
