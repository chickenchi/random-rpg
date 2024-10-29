import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 10%;

  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin-left: 30px;

  font-size: 24pt;
  font-weight: 500;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Title>랜덤 RPG</Title>
    </HeaderDiv>
  );
};

export default Header;
