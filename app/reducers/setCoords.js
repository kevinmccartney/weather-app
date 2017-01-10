import SET_COORDS from '../constants'

const initialCoords = ''

export default function coords(coords = initialCoords, action) {
  switch (action.type) {
    case SET_COORDS:
      return action.coords

    default:
      return coords
  }
}
