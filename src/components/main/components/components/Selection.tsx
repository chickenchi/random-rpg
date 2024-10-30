import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  currentEventState,
  currentPageState,
  currentRoutePointState,
  currentRouteState,
  isAllowBackPageState,
} from "../../../../Atom";
import { useRecoilState } from "recoil";

const SelectionDiv = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SelectTitle = styled.p`
  margin-bottom: 10px;

  font-size: 15pt;
  font-weight: 500;
`;

const AnswerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswerInput = styled.input`
  width: 50px;
  height: 32px;

  margin-right: 5px;

  font-size: 10pt;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: rgba(255, 255, 255);

  padding: 8px 20px;

  border: 1px solid rgb(48, 62, 255);
  border-radius: 3px;

  color: rgb(48, 62, 255);
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

const Selection = () => {
  const [minIndex, setMinIndex] = useState<number>(1);
  const [maxIndex, setMaxIndex] = useState<number>(2);
  const [answer, setAnswer] = useState<string>("");
  const [events, setEvents] = useState<string[] | null>(null);

  const [isAllowBackPage] = useRecoilState(isAllowBackPageState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [, setCurrentRoute] = useRecoilState(currentRouteState);
  const [routePoint, setRoutePoint] = useRecoilState(currentRoutePointState);
  const [eventPage] = useRecoilState(currentEventState);

  const shuffleArray = (arr: string[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  useEffect(() => {
    let eventList = shuffleArray(eventPage.slice());

    setEvents(eventList);
  }, []);

  const previousScene = () => {
    setCurrentPage(currentPage - 1);
  };

  const confirm = () => {
    let answerValue = parseInt(answer);

    if (
      minIndex > answerValue ||
      maxIndex < answerValue ||
      isNaN(answerValue)
    ) {
      alert("값을 넘었거나 유효하지 않는 값입니다.");
      return;
    }

    if (events) {
      setCurrentRoute(events[answerValue - 1]);
      setRoutePoint([...routePoint, events[answerValue - 1]]);
      setEvents([]);
      setCurrentPage(0);
    }
  };

  const handleAnswerInputChange = (e: any) => {
    setAnswer(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      confirm();
    }
  };

  return (
    <SelectionDiv>
      <SelectTitle>
        {minIndex}부터 {maxIndex}까지 중에 고르세요!
      </SelectTitle>

      <AnswerDiv>
        {isAllowBackPage && (
          <PreviousButton onClick={previousScene}>이전</PreviousButton>
        )}

        <AnswerInput
          value={answer}
          onChange={handleAnswerInputChange}
          onKeyDown={handleKeyDown}
          maxLength={4}
        />

        <SubmitButton onClick={confirm}>결과 확인</SubmitButton>
      </AnswerDiv>
    </SelectionDiv>
  );
};

export default Selection;
