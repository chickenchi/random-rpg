import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GameScreen from "./components/GameScreen";
import GameManager from "./components/GameManager";

const MainDiv = styled.div`
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Main = () => {
  useEffect(() => {}, []);

  return (
    <MainDiv>
      <GameManager />
      <GameScreen />
    </MainDiv>
  );
};

export default Main;
