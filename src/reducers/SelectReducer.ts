import {DispatchChangeSelectType} from "../actions/Select/SelectActionsType";

interface DefaultStateType {
  firstSelect?: string,
  secondSelect?: string
}

const defaultState: DefaultStateType = {
  firstSelect: 'all',
  secondSelect: 'all'
}

const selectReducer = (state: DefaultStateType = defaultState, action: DispatchChangeSelectType): DefaultStateType => {

  switch (action.type) {
    case "CHANGE_FIRST_SELECT":
      return {
        firstSelect: action.payload.value,
        secondSelect: state.secondSelect
      }
    case "CHANGE_SECOND_SELECT":
      return {
        firstSelect: state.firstSelect,
        secondSelect: action.payload.value
      }
    default:
      return state
  }
}

export default selectReducer
