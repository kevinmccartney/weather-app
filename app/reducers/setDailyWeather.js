import SET_DAILY_WEATHER from '../constants'

const initialDailyWeather = ''

export default function dailyWeather(dailyWeather = initialDailyWeather, action) {
  switch (action.type) {
    case SET_DAILY_WEATHER:
      return action.dailyWeather

    default:
      return dailyWeather
  }
}
