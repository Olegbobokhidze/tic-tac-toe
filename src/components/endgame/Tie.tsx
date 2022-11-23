import React from "react";
import styled from "styled-components";

const Holder = styled.div`
  background-color: #1f3641;
  width: 100%;
  height: 228px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 350px;
  left: 0px;
  z-index: 99;
`;
const Paragraph = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  color: #a8bfc9;
`;
const ButtonsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Quit = styled.button`
  width: 76px;
  height: 52px;
  border-radius: 10px;
  background-color: #a8bfc9;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  color: #1a2a33;
  font-weight: 700;

  font-size: 16px;
  &:hover {
    background-color: #dbe8ed;
  }
`;
const NextRound = styled.button`
  width: 139px;
  height: 52px;
  border-radius: 10px;
  background-color: #f2b137;
  border: none;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  color: #1a2a33;
  font-size: 16px;
  margin-left: 10px;
  &:hover {
    background-color: #ffc860;
  }
`;
type Prop = {
  xIsNext: boolean;
  setStepNumber: (number: number) => void;
  setXIsNext: (boolean: boolean) => void;
  setQuitTie: (boolean: boolean) => void;
};
function nextRound(props: Prop) {
  props.setXIsNext(true);
  props.setStepNumber(0);
}
const Tie = (props: Prop) => {
  return (
    <Holder>
      <Paragraph>round tied</Paragraph>
      <ButtonsHolder>
        <Quit onClick={() => props.setQuitTie(false)}>quit</Quit>
        <NextRound onClick={() => nextRound(props)}>next round</NextRound>
      </ButtonsHolder>
    </Holder>
  );
};

export default Tie;
