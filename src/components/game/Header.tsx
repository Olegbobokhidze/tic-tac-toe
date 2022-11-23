import React, { useState } from "react";
import Logo from "../../assets/Logo";
import IconRestart from "../../assets/IconRestart";
import styled from "styled-components";
import IconXSilver from "../../assets/IconXSilver";
import IconOSilver from "../../assets/IconOSilver";
import IconOSilverHeader from "../../assets/IconOSilverHeader";
import IconXSilverHeader from "../../assets/IconXSilverHeader";
import Restart from "../endgame/Restart";
const TurnHolder = styled.div`
  width: 96px;
  display: flex;
  align-items: center;
  color: #a8bfc9;
  height: 40px;
  background-color: #1f3641;
  border-radius: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 4px solid #10212a;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 52px;
  }
`;
const RestartButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin-left: 35px;
  align-items: center;
  background-color: #a8bfc9;
  border-radius: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 4px solid #6b8997;
  cursor: pointer;
  &:hover {
    background-color: #dbe8ed;
  }
  @media screen and (min-width: 768px) {
    width: 52px;
    height: 52px;
    margin-left: 38px;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

type Prop = {
  xIsNext: boolean;
  setStepNumber: (number: number) => void;
  setXIsNext: (boolean: boolean) => void;
  setQuitTie: (boolean: boolean) => void;
  setQuitWinner: (boolean: boolean) => void;
  setQuitWinnerO: (boolean: boolean) => void;
};
const Header = (props: Prop) => {
  const [restart, setRestart] = useState<boolean>(false);
  return (
    <Holder>
      <Logo />
      <TurnHolder>
        {props.xIsNext ? <IconXSilverHeader /> : <IconOSilverHeader />}
        turn
      </TurnHolder>
      <RestartButton onClick={() => setRestart(true)}>
        <IconRestart />
      </RestartButton>
      {restart ? (
        <Restart
          setRestart={setRestart}
          setStepNumber={props.setStepNumber}
          setXIsNext={props.setXIsNext}
          setQuitTie={props.setQuitTie}
          setQuitWinnerO={props.setQuitWinnerO}
          setQuitWinner={props.setQuitWinner}
        />
      ) : null}
    </Holder>
  );
};

export default Header;
