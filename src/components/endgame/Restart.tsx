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
const NoRestart = styled.button`
  width: 139px;
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
const YesRestart = styled.button`
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
  setRestart: (boolean: boolean) => void;
  setStepNumber: (number: number) => void;
  setXIsNext: (boolean: boolean) => void;
  setQuitTie: (boolean: boolean) => void;
  setQuitWinner: (boolean: boolean) => void;
  setQuitWinnerO: (boolean: boolean) => void;
};
const Restart = (props: Prop) => {
  function Restart() {
    props.setStepNumber(0);
    props.setRestart(false);
    props.setXIsNext(true);
    props.setQuitWinner(true);
    props.setQuitWinnerO(true);
    props.setQuitTie(true);
  }
  return (
    <Holder>
      <Paragraph>restart game?</Paragraph>
      <ButtonsHolder>
        <NoRestart onClick={() => props.setRestart(false)}>
          No, cancel
        </NoRestart>
        <YesRestart onClick={() => Restart()}>Yes, restart</YesRestart>
      </ButtonsHolder>
    </Holder>
  );
};

export default Restart;
