export const SET_POINTS = "SET_POINTS"
export const RESET_POINTS = "RESET_POINTS"

export interface PointsType {
  firstPlayerWin: boolean,
  secondPlayerWin: boolean
}

export interface SetPoints {
  type: typeof SET_POINTS,
  payload: PointsType
}

export interface ResetPoints {
  type: typeof RESET_POINTS
}

export type DispatchSetPoints = SetPoints | ResetPoints
