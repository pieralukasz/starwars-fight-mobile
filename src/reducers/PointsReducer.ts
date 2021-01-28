import {DispatchSetPoints, RESET_POINTS, SET_POINTS} from "../actions/Points/PointsActionType";

interface DefaultPointsStateType {
  firstSelect: number,
  secondSelect: number
}

const defaultState: DefaultPointsStateType = {
  firstSelect: 0,
  secondSelect: 0
}

const pointsReducer = (state: DefaultPointsStateType = defaultState, action: DispatchSetPoints): DefaultPointsStateType => {

  switch (action.type) {
    case SET_POINTS:
      if (action.payload.firstPlayerWin) {
        return {
          firstSelect: state.firstSelect + 1,
          secondSelect: state.secondSelect
        }
      } else if (action.payload.secondPlayerWin) {
        return {
          firstSelect: state.firstSelect,
          secondSelect: state.secondSelect + 1
        }
      } else {
        return {
          firstSelect: state.firstSelect,
          secondSelect: state.secondSelect
        }
      }
    case RESET_POINTS:
      return {
        firstSelect: 0,
        secondSelect: 0
      }
    default:
      return state
  }
}

export default pointsReducer
