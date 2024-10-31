import React from "react";
import styled from "styled-components";
import GameScreen from "./mainComponents/GameScreen";
import GameManager from "./mainComponents/GameManager";

const MainDiv = styled.div`
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Main = () => {
  return (
    <MainDiv>
      <GameManager />
      <GameScreen />
    </MainDiv>
  );
};

export default Main;
