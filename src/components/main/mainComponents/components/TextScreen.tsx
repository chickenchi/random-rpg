import { useEffect, useState } from "react";
import styled from "styled-components";
import { currentEventState, storyState } from "../../../../Atom";
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
  const [event] = useRecoilState(currentEventState);

  const [eventFormat, setEventFormat] = useState("");

  useEffect(() => {
    let stringEvent = "";

    event.forEach((e) => {
      stringEvent += e + ", ";
    });

    stringEvent = `[${stringEvent}]`;
    stringEvent = stringEvent.replace(", ]", "]");

    setEventFormat(stringEvent);
  }, [event]);

  return (
    <DescribeDiv>
      {story.split("\n").map((line, index) => (
        <Text key={index}>
          {line.includes("[getEvent]")
            ? line.replace("[getEvent]", eventFormat)
            : line}
        </Text>
      ))}
    </DescribeDiv>
  );
};

export default TextScreen;
