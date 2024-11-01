import { useState } from "react";
import styled from "styled-components";
import { storyState } from "../../../../Atom";
import { useRecoilState } from "recoil";

const DescribeDiv = styled.div`
  background-color: white;

  width: 90%;
  height: 30%;

  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  color: rgb(50, 50, 50);
  font-size: 15pt;
  font-weight: 500;
`;

const TextScreen = () => {
  const [story] = useRecoilState(storyState);

  return (
    <DescribeDiv>
      {story.split("\n").map((line, index) => (
        <Text key={index}>{line}</Text>
      ))}
    </DescribeDiv>
  );
};

export default TextScreen;
