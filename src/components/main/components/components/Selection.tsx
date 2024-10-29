import { useState } from "react";
import styled from "styled-components";

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

const Selection = () => {
  const [minIndex, setMinIndex] = useState<string>("1");
  const [maxIndex, setMaxIndex] = useState<string>("2");

  const confirm = () => {};

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
        <AnswerInput onKeyDown={handleKeyDown} maxLength={maxIndex.length} />

        <SubmitButton onClick={confirm}>결과 확인</SubmitButton>
      </AnswerDiv>
    </SelectionDiv>
  );
};

export default Selection;
