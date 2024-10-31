import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFromLocalStorage } from "../localStorage/LocalStorage";
const EndDiv = styled.div`
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const End = () => {
  const [endingValue, setEndingValue] = useState("");

  const getEndingType = async () => {
    const endingType = await getFromLocalStorage("endingType");

    setEndingValue(endingType);
  };

  useEffect(() => {
    getEndingType();
  }, []);

  return (
    <EndDiv>
      <>{endingValue}</>
    </EndDiv>
  );
};

export default End;
