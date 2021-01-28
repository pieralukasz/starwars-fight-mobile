import React, {ReactText} from "react";

import { Text, View } from "react-native";
import {
  StarwarsPeopleMass,
  StarwarsRequestEnum,
  StarwarsStarshipCrew,
} from "../../actions/StarWars/StarwarsActionsType";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardItemInside } from "./CardItemInside";
import {checkIfUnknown} from "../../utils/utils";
import {CirclePoints} from "./CardCirclePoints";

type CardExtProps = {
  isActive: boolean;
  position: string;
  player: StarwarsPeopleMass | StarwarsStarshipCrew | undefined;
  points: number | string | undefined;
};

export const CardExt: React.FC<CardExtProps> = (props) => {
  const { player } = props;

  const dispatch = useDispatch();

  const [playerDefault, setPlayerDefault] = useState<StarwarsRequestEnum>(
    StarwarsRequestEnum.PEOPLE
  );

  const isPeople = (): boolean => {
    return playerDefault === StarwarsRequestEnum.PEOPLE;
  };

  useEffect(() => {
    const check = player?.mass
      ? StarwarsRequestEnum.PEOPLE
      : StarwarsRequestEnum.STARSHIPS;

    setPlayerDefault(check);
  }, [player]);

  return (
    <CardExtView>
      {player ? (
        <InfoInside>
          <CardItemInside
            title={"TYPE"}
            description={isPeople() ? "PEOPLE" : "STARSHIPS"}
          />
          <CardItemInside
            title={"NAME"}
            description={player?.name}
          />
          <CardItemInside
            title={isPeople() ? 'MASS' : 'CREW'}
            description={isPeople() ? checkIfUnknown(player?.mass) : checkIfUnknown(player?.crew)}
          />
        </InfoInside>
      ) : (
        <QuestionMark>?</QuestionMark>
      )}
      <CirclePoints position={props.position}>
        {props.points}
      </CirclePoints>

    </CardExtView>
  );
};

const CardExtView = styled(View)`
  background-color: rgba(206, 206, 206, 0.6);
  width: 220px;
  height: 220px;
  border-radius: 12px;
  border: 2px solid white;
`;
const InfoInside = styled(View)`
  width: 100%;
  height: 95%;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
`;

const QuestionMark = styled(Text)`
  flex: 1;
  font-size: 156px;
  color: rgba(255, 255, 255, 0.8);
  width: 100%;
  text-align: center;
`;
