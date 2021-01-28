import { Dispatch } from "redux";
import {
  STARWARS_FAIL,
  STARWARS_LOADING,
  STARWARS_RESOURCES,
  STARWARS_SUCCESS_PEOPLE,
  STARWARS_SUCCESS_PLAYERS,
  STARWARS_SUCCESS_STARSHIP,
  StarwarsDispatchTypes,
  StarwarsRequestTwoPlayerType,
  StarwarsRequestType,
  StarwarsResourceType,
} from "./StarwarsActionsType";
import axios from "axios";
import { getNumberFromUrl, getRandomId } from "../../utils/utils";
import {acceptedPeopleNumber, acceptedStarshipsNumber} from "../../utils/BadNumbersApi";

export const GetTwoStarwarsPlayer = (
  starwars: StarwarsRequestTwoPlayerType
) => async (dispatch: Dispatch<StarwarsDispatchTypes>) => {
  console.log("dzialam");

  try {
    dispatch({
      type: STARWARS_LOADING,
    });

    const selected = ["people", "starships"];

    let {
      firstPlayerType,
      secondPlayerType
    } = starwars;

    const selectedFirstPlayer =
      firstPlayerType === "all"
        ? selected[Math.round(Math.random() * 1)]
        : firstPlayerType;
    const selectedSecondPlayer =
      secondPlayerType === "all"
        ? selected[Math.round(Math.random() * 1)]
        : secondPlayerType;

    let randomIdFirstPlayer = 0;
    let randomIdSecondPlayer = 0;

    if (firstPlayerType === "people") {
      randomIdFirstPlayer = getRandomId(acceptedPeopleNumber);
    } else {
      randomIdFirstPlayer = getRandomId(acceptedStarshipsNumber);
    }

    if (secondPlayerType === "people") {
      randomIdSecondPlayer = getRandomId(acceptedPeopleNumber);
    } else {
      randomIdSecondPlayer = getRandomId(acceptedStarshipsNumber);
    }

    const firstPlayer = await axios
      .get(`http://swapi.dev/api/${selectedFirstPlayer}/${randomIdFirstPlayer}`)
      .then((res) => res.data);

    const secondPlayer = await axios
      .get(
        `https://swapi.dev/api/${selectedSecondPlayer}/${randomIdSecondPlayer}`
      )
      .then((res) => res.data);

    dispatch({
      type: STARWARS_SUCCESS_PLAYERS,
      payload: {
        firstPlayer,
        secondPlayer,
        acceptedNumberPeople: acceptedPeopleNumber,
        acceptedNumberStarships: acceptedStarshipsNumber,
      },
    });
  } catch (e) {
    console.log(e);

    dispatch({
      type: STARWARS_FAIL,
      payload: {
        message: e.response ? e.response.data : "CORS",
      },
    });
  }
};

export const GetStarwars = (starwars: StarwarsRequestType) => async (
  dispatch: Dispatch<StarwarsDispatchTypes>
) => {
  const { player, id } = starwars;

  try {
    dispatch({
      type: STARWARS_LOADING,
    });

    const response = await axios
      .get(`https://swapi.dev/api/${player}/${id}`)
      .then((res) => res.data);

    if (player === "people") {
      dispatch({
        type: STARWARS_SUCCESS_PEOPLE,
        payload: {
          people: response,
        },
      });
    } else {
      dispatch({
        type: STARWARS_SUCCESS_STARSHIP,
        payload: {
          starship: response,
        },
      });
    }
  } catch (e) {
    dispatch({
      type: STARWARS_FAIL,
      payload: {
        message: e.message,
      },
    });
    console.error(e.body);
  }
};
