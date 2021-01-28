import {Dispatch} from "redux";
import {CHANGE_FIRST_SELECT, CHANGE_SECOND_SELECT, DispatchChangeSelectType, SelectType} from "./SelectActionsType";

export const setActiveSelect = (selectRequest: SelectType) => (dispatch: Dispatch<DispatchChangeSelectType>) => {

  const { value, select } = selectRequest

  if (select === 'left') {
    dispatch({
      type: CHANGE_FIRST_SELECT,
      payload: {
        value
      }
    })
  } else {
    dispatch({
      type: CHANGE_SECOND_SELECT,
      payload: {
        value
      }
    })
  }


}
