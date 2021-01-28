import React from "react";
import {Text, View} from "react-native";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootStoreType} from '../../store'
import {ButtonContainer} from "../../components/Buttons/ButtonContainer";
import {CardContainer} from "../../components/Card/CardContainer";

const Dashboard = () => {

  const starwarsState = useSelector((state: RootStoreType) => state.starwars)

  return (
    <DashboardContainer>
      <CardContainerExpanded />
      <ButtonContainerExpanded />
    </DashboardContainer>
  )
}

export default Dashboard

const DashboardContainer = styled(View)`
  width: 100%;
  flex: 1;
`

const CardContainerExpanded = styled(CardContainer)`
  width: 100%;

`

const ButtonContainerExpanded = styled(ButtonContainer)`

`
