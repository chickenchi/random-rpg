import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 10%;

  display: flex;
  align-items: center;
`;

const HomeLink = styled.a`
  text-decoration: none;
`;

const Title = styled.h1`
  margin-left: 30px;

  color: rgb(80, 80, 80);

  font-size: 24pt;
  font-weight: 500;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <HomeLink href="/">
        <Title>랜덤 RPG</Title>
      </HomeLink>
    </HeaderDiv>
  );
};

export default Header;
