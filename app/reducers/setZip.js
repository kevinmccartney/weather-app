import SET_ZIP from '../constants'

const initialZip = ''

export default function zip(zip = initialZip, action) {
  switch (action.type) {
    case SET_ZIP:
      return action.zip

    default:
      return zip
  }
}
