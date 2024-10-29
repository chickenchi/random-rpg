import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currentPageState } from "../../../../Atom";

const MoveLevelDiv = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoveButton = styled.button`
  background-color: rgba(255, 255, 255);

  padding: 8px 20px;

  margin-right: 10px;

  border: 1px solid rgb(48, 62, 255);
  border-radius: 3px;

  color: rgb(48, 62, 255);
`;

const PreviousButton = styled(MoveButton)``;
const NextButton = styled(MoveButton)`
  margin-right: 0;
`;

const MoveScene = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const previousScene = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextScene = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <MoveLevelDiv>
      {currentPage !== 1 && (
        <PreviousButton onClick={previousScene}>이전</PreviousButton>
      )}
      <NextButton onClick={nextScene}>다음</NextButton>
    </MoveLevelDiv>
  );
};

export default MoveScene;
