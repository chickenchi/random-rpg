import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  currentEventState,
  currentItemState,
  currentPageState,
  currentRouteState,
  giveItemState,
  isAllowBackPageState,
} from "../../../../Atom";

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
  const [isAllowBackPage] = useRecoilState(isAllowBackPageState);
  const [event, setEvent] = useRecoilState(currentEventState);
  const [currentRoute, setCurrentRoute] = useRecoilState(currentRouteState);
  const [currentItem, setCurrentItem] = useRecoilState(currentItemState);
  const [giveItem] = useRecoilState(giveItemState);

  const previousScene = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextScene = () => {
    if (giveItem) {
      setCurrentItem([...currentItem, giveItem]);
    }

    if (event.length) {
      setCurrentRoute(event[0]);
      setEvent([]);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <MoveLevelDiv>
      {isAllowBackPage && currentPage !== 0 && (
        <PreviousButton onClick={previousScene}>이전</PreviousButton>
      )}
      <NextButton onClick={nextScene}>다음</NextButton>
    </MoveLevelDiv>
  );
};

export default MoveScene;
