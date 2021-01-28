import {Text, View} from "react-native";
import React from "react";
import styled from "styled-components";

type CardItemInsideType = {
  title: string,
  description: string | number | undefined
}


export const CardItemInside: React.FC<CardItemInsideType> = ({title, description}) => {
  return (
    <ItemInsideView>
      <TypeText>
        { title }
      </TypeText>
      <DescriptionText>
        { description }
      </DescriptionText>
    </ItemInsideView>

  )
}

const ItemInsideView = styled(View)`
  flex: 1;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

`

const TypeText = styled(Text)`
  color: #cecece;
  font-size: 16px;
  font-weight: bold;
`
const DescriptionText = styled(Text)`
  color: white;
  font-size: 20px;
`
