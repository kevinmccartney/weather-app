import SET_CURRENT_WEATHER from '../constants'

const initialCurrentWeather = ''

export default function currentWeather(currentWeather = initialCurrentWeather, action) {
  switch (action.type) {
    case SET_CURRENT_WEATHER:
      return action.currentWeather

    default:
      return currentWeather
  }
}
