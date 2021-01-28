import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

interface CirclePointsType {
  position: string;
}

export const CirclePoints: React.FC<CirclePointsType> = ({
  position,
  children,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 500);
  }, [children]);

  return (
    <CirclePointsView position={position}>
      <CirclePointsText>{children}</CirclePointsText>
    </CirclePointsView>
  );
};

const CirclePointsView = styled(View)<CirclePointsType>`


  ${(p) => p.position === 'left' && `
    right: -35px;
    bottom: -35px;
  `}

  ${(p) => p.position === 'right' && `
    left: -35px;
    top: -35px;
  `}
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50px;
`;

const CirclePointsText = styled(Text)`
  font-size: 26px;
  font-weight: bold;

`;
