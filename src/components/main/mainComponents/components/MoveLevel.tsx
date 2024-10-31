import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  currentEventState,
  currentItemState,
  currentPageState,
  currentRouteState,
  endPointState,
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
const EndButton = styled(MoveButton)`
  margin-right: 0;
`;
const NextButton = styled(MoveButton)`
  margin-right: 0;
`;

const MoveScene = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [currentItem, setCurrentItem] = useRecoilState(currentItemState);

  const [, setCurrentRoute] = useRecoilState(currentRouteState);

  const [isAllowBackPage] = useRecoilState(isAllowBackPageState);
  const [event] = useRecoilState(currentEventState);
  const [giveItem] = useRecoilState(giveItemState);
  const [endPoint] = useRecoilState(endPointState);

  const previousScene = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextScene = () => {
    if (giveItem) {
      setCurrentItem([...currentItem, giveItem]);
    }

    if (event.length) {
      setCurrentRoute(event[0]);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const endScene = () => {
    window.location.href = "/end";
  };

  return (
    <MoveLevelDiv>
      {!endPoint ? (
        <>
          {isAllowBackPage && currentPage !== 0 && (
            <PreviousButton onClick={previousScene}>이전</PreviousButton>
          )}
          <NextButton onClick={nextScene}>다음</NextButton>
        </>
      ) : (
        <EndButton onClick={endScene}>완료</EndButton>
      )}
    </MoveLevelDiv>
  );
};

export default MoveScene;
