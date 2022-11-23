import React, { useState } from "react";
import styled from "styled-components";

const XScore = styled.div`
  width: 96px;
  height: 64px;
  background-color: #31c3bd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 72px;
  }
`;
const OScore = styled.div`
  width: 96px;
  height: 64px;
  background-color: #f2b137;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 72px;
  }
`;
const Ties = styled.div`
  width: 96px;
  height: 64px;
  background-color: #a8bfc9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 72px;
  }
`;
const ParagraphTitle = styled.p`
  font-weight: 500;
  color: #1a2a33;
  text-transform: uppercase;
  letter-spacing: 0.75;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
const Score = styled.p`
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  color: #1a2a33;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
type Prop = {
  countX: number;
  setCountX: (number: number) => void;
};
const Footer = (props: Prop) => {
  return (
    <Holder>
      <XScore>
        <ParagraphTitle>X(player 1)</ParagraphTitle>
        <Score>{props.countX}</Score>
      </XScore>
      <Ties>
        <ParagraphTitle>Ties</ParagraphTitle>
        <Score>32</Score>
      </Ties>
      <OScore>
        <ParagraphTitle>O(player 2)</ParagraphTitle>
        <Score>10</Score>
      </OScore>
    </Holder>
  );
};

export default Footer;
