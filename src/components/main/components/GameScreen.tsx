import { useState } from "react";
import styled from "styled-components";
import TextScreen from "./components/TextScreen";
import MoveScene from "./components/MoveLevel";
import Selection from "./components/Selection";
import { useRecoilState } from "recoil";
import { gameStatusState } from "../../../Atom";

const GameScreenDiv = styled.div`
  background-color: #e0e0e0;

  width: 80%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GameScreen = () => {
  const [gameStatus] = useRecoilState(gameStatusState);

  return (
    <GameScreenDiv>
      <TextScreen />
      {gameStatus === "Read" ? <MoveScene /> : <Selection />}
    </GameScreenDiv>
  );
};

export default GameScreen;
