import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import styled from 'styled-components';
import Store from "./src/store";
import { Provider } from "react-redux";
import Dashboard from "./src/views/Dashboard/Dashboard";
const image = require('./assets/stars.png')




export default function App() {

  return (
    <Provider store={Store}>
      <TopHelper />
      <ImageBackgroundExpanded source={image}>
        <Header>
          <HeaderText >THE STARWARS GAME</HeaderText>
        </Header>
        <Dashboard />
        <StatusBar style="auto" />
      </ImageBackgroundExpanded>
    </Provider>
  )
}

const TopHelper = styled(View)`
  flex: 0.04
`

const ImageBackgroundExpanded = styled(ImageBackground)`
  flex: 0.96;
  width: 100%;
  height: 100%;
`

const Header = styled(View)`
  flex: 0.1;
  justify-content: center;
  align-items: center;
`

const HeaderText = styled(Text)`
  color: yellow;
  font-size: 20px;
  font-weight: bold;
`

const ExpandedView  = styled(View)`
  background-color: red;
  flex: 1;
  align-items: center;
  justify-content: center;
`

