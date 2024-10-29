import { useState } from "react";
import styled from "styled-components";
import { pageScriptState } from "../../../../Atom";
import { useRecoilState } from "recoil";

const SelectionDiv = styled.div`
  background-color: white;

  width: 90%;
  height: 30%;

  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 15pt;
  font-weight: 500;
`;

const TextScreen = () => {
  const [pageScript] = useRecoilState(pageScriptState);

  return (
    <SelectionDiv>
      <Text>{pageScript}</Text>
    </SelectionDiv>
  );
};

export default TextScreen;
