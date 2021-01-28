import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "../../store";
import {
  StarwarsPeopleMass,
  StarwarsRequestEnum,
  StarwarsStarshipCrew
} from "../../actions/StarWars/StarwarsActionsType";
import {checkIfUnknown} from "../../utils/utils";
import {setNewPoints} from "../../actions/Points/PointsAction";
import {Text, View} from "react-native";
import styled from "styled-components";
import {CardExt} from "./Card";

export const CardContainer: React.FC = () => {
  const dispatch = useDispatch();

  const starwarsState = useSelector((state: RootStoreType) => state.starwars);
  const pointsState = useSelector((state: RootStoreType) => state.points);

  const [firstPlayer, setFirstPlayer] = useState<
    StarwarsPeopleMass | StarwarsStarshipCrew | undefined
    >(undefined);
  const [secondPlayer, setSecondPlayer] = useState<
    StarwarsPeopleMass | StarwarsStarshipCrew | undefined
    >(undefined);

  const CheckWinner = useCallback(() => {
    const first = starwarsState.firstPlayer;
    const second = starwarsState.secondPlayer;
    let firstPoints = 0;
    let secondPoints = 0;

    const firstCheck = first?.mass
      ? StarwarsRequestEnum.PEOPLE
      : StarwarsRequestEnum.STARSHIPS;
    firstPoints =
      firstCheck === StarwarsRequestEnum.PEOPLE
        ? checkIfUnknown(first?.mass)
        : checkIfUnknown(first?.crew);

    const secondCheck = second?.mass
      ? StarwarsRequestEnum.PEOPLE
      : StarwarsRequestEnum.STARSHIPS;
    secondPoints =
      secondCheck === StarwarsRequestEnum.PEOPLE
        ? checkIfUnknown(second?.mass)
        : checkIfUnknown(second?.crew);

    if (firstPoints > secondPoints) {
      dispatch(
        setNewPoints({
          firstPlayerWin: true,
          secondPlayerWin: false,
        })
      );
    } else if (firstPoints < secondPoints) {
      dispatch(
        setNewPoints({
          firstPlayerWin: false,
          secondPlayerWin: true,
        })
      );
    } else {
      dispatch(
        setNewPoints({
          firstPlayerWin: false,
          secondPlayerWin: false,
        })
      );
    }
  }, [dispatch, starwarsState.firstPlayer, starwarsState.secondPlayer]);


  // clear players when points reset
  useEffect(() => {
    if (pointsState.firstSelect === 0 && pointsState.secondSelect === 0) {
      setFirstPlayer(undefined)
      setSecondPlayer(undefined)
    }
  }, [pointsState])

  // initial effect of players and later games
  useEffect(() => {
    if (starwarsState.firstPlayer && starwarsState.secondPlayer) {
      setFirstPlayer(starwarsState.firstPlayer);
      setSecondPlayer(starwarsState.secondPlayer);
      CheckWinner();
    }
  }, [CheckWinner, starwarsState]);

  return (
    <CardContainerView>
      <CardExt
        isActive={false}
        position={"left"}
        player={firstPlayer}
        points={pointsState.firstSelect}
      />
      <TextStyle>vs</TextStyle>
      <CardExt
        isActive={false}
        position={"right"}
        player={secondPlayer}
        points={pointsState.secondSelect}
      />
    </CardContainerView>
  );
};


const CardContainerView = styled(View)`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 0.85;

`


const TextStyle = styled(Text)`
  color: yellow;
  font-size: 100px;
  font-weight: bold;

`
