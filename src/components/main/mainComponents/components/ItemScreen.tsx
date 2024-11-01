import { useState } from "react";
import styled from "styled-components";
import { currentItemState, storyState } from "../../../../Atom";
import { useRecoilState } from "recoil";

const ItemDiv = styled.div`
  position: absolute;
  top: 10px;

  width: 90%;
  height: 5%;

  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  color: rgb(60, 60, 60);
  font-size: 13pt;
  font-weight: 500;

  margin-right: 10px;
`;

const Text = styled.p`
  color: rgb(80, 80, 80);
  font-size: 11pt;
  font-weight: 500;

  margin-right: 10px;
`;

const ItemScreen = () => {
  const [items] = useRecoilState(currentItemState);

  return (
    <ItemDiv>
      <Title>가지고 있는 아이템</Title>
      <Text>
        {items.length
          ? items.map((item, index) => (
              <>
                {item}
                {index !== items.length - 1 && ", "}
              </>
            ))
          : "아이템이 없습니다."}
      </Text>
    </ItemDiv>
  );
};

export default ItemScreen;
