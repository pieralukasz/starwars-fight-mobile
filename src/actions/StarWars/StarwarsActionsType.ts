export const STARWARS_LOADING = "STARWARS_LOADING"
export const STARWARS_FAIL = "STARWARS_FAIL"
export const STARWARS_SUCCESS_PEOPLE = "STARWARS_SUCCESS_PEOPLE"
export const STARWARS_SUCCESS_STARSHIP = "STARWARS_SUCCESS_STARSHIP"
export const STARWARS_SUCCESS_PLAYERS = "STARWARS_SUCCESS_PLAYERS"
export const STARWARS_RESOURCES = 'STARWARS_RESOURCES'

export type StarwarsPeopleMass = {
  name: string,
  mass: string | number,
  crew: undefined
}

export type StarwarsStarshipCrew = {
  name: string,
  mass: undefined
  crew: string | number
}

export type StarwarsResourceType = {
  url: string
}

export enum StarwarsRequestEnum {
  STARSHIPS = 'starships',
  PEOPLE = 'people'
}

export interface StarwarsLoading {
  type: typeof STARWARS_LOADING
}

export interface StarwarsFail {
  type: typeof STARWARS_FAIL
  payload: {
    message: any
  }
}

export interface StarwarsSuccessPeople {
  type: typeof STARWARS_SUCCESS_PEOPLE,
  payload: {
    people: StarwarsPeopleMass
  }
}

export interface StarwarsSuccessStarship {
  type: typeof STARWARS_SUCCESS_STARSHIP,
  payload: {
    starship: StarwarsStarshipCrew
  }
}

export interface StarwarsSuccessPlayers {
  type: typeof STARWARS_SUCCESS_PLAYERS,
  payload: {
    firstPlayer: StarwarsPeopleMass | StarwarsStarshipCrew,
    secondPlayer: StarwarsPeopleMass | StarwarsStarshipCrew
  }
}

export interface StarwarsRequestType {
  player: StarwarsRequestEnum,
  id: number
}

export interface StarwarsRequestTwoPlayerType {
  firstPlayerType?: string,
  secondPlayerType?: string
}

export type StarwarsDispatchTypes = StarwarsLoading
  | StarwarsFail
  | StarwarsSuccessStarship
  | StarwarsSuccessPeople
  | StarwarsSuccessPlayers
