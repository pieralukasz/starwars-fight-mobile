import React, {useEffect} from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { resetAllPoints } from "../../actions/Points/PointsAction";
import { RootStoreType } from "../../store";
import { GetTwoStarwarsPlayer } from "../../actions/StarWars/StarwarsActions";



export const ButtonContainer: React.FC = () => {

  const starwarsState = useSelector((state: RootStoreType) => state.starwars)
  const selectState = useSelector((state: RootStoreType) => state.select)

  const dispatch = useDispatch()

  const ResetAllPoints = () => {
    dispatch(resetAllPoints())
  }

  const GenerateRandomPlayer = async (): Promise<any> => {
    // first load all data becouse some id is invalid
    if (!starwarsState.loading) {
      const {firstSelect, secondSelect} = selectState

      const dispatchData = {
        firstPlayerType: firstSelect,
        secondPlayerType: secondSelect
      }

      await dispatch(GetTwoStarwarsPlayer(dispatchData))
    }

  }

  useEffect(() => {
    if ((starwarsState.message && starwarsState.message === 'Not found') || starwarsState.message === 'CORS') {
      const {firstSelect, secondSelect} = selectState

      dispatch(GetTwoStarwarsPlayer({firstPlayerType: firstSelect, secondPlayerType: secondSelect}))
    }
  })

  return (
    <ViewExpanded>
      <ButtonReset onPress={ResetAllPoints}>
        <ButtonResetText>RESET</ButtonResetText>
      </ButtonReset>
      <ButtonGenerate onPress={GenerateRandomPlayer}>
        <ButtonGenerateText>GENERATE RANDOM PLAYERS</ButtonGenerateText>
      </ButtonGenerate>
    </ViewExpanded>
  )
}


const ViewExpanded = styled(View)`

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 0.15;


`

const ButtonReset = styled(TouchableOpacity)`

  background-color: #e74c3c;
  padding: 8px 16px;
  border-radius: 8px;
`
const ButtonResetText = styled(Text)`
  color: white;
  font-weight: bold;
`

const ButtonGenerate = styled(TouchableOpacity)`
  background-color: yellow;
  padding: 8px 16px;
  border-radius: 8px;

`

const ButtonGenerateText = styled(Text)`
  color: black;
  font-weight: bold;
`
