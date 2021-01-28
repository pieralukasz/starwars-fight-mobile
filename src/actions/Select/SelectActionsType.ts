export const CHANGE_FIRST_SELECT = 'CHANGE_FIRST_SELECT'
export const CHANGE_SECOND_SELECT = 'CHANGE_SECOND_SELECT'

export interface SelectType {
  value: string,
  select: string
}

export interface ChangeFirstSelect {
  type: typeof CHANGE_FIRST_SELECT,
  payload: {
    value: string
  }
}

export interface ChangeSecondSelect {
  type: typeof CHANGE_SECOND_SELECT,
  payload: {
    value: string
  }
}

export type DispatchChangeSelectType = ChangeFirstSelect | ChangeSecondSelect
