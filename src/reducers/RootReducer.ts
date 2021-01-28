import { combineReducers } from 'redux'
import StarwarsReducer from "./StarwarsReducer";
import SelectReducer from "./SelectReducer"
import PointsReducer from './PointsReducer'

const RootReducer = combineReducers({
  starwars: StarwarsReducer,
  select: SelectReducer,
  points: PointsReducer
})

export default RootReducer
