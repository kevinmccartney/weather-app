import SET_FORECAST from '../constants'

const initialForecast = ''

export default function forecast(forecast = initialForecast, action) {
  switch (action.type) {
    case SET_FORECAST:
      return action.forecast

    default:
      return forecast
  }
}
