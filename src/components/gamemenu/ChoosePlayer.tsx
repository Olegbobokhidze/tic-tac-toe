import React, { useState } from "react";
import styled from "styled-components";
import IconOBlack from "../../assets/IconOBlack";
import IconOSilver from "../../assets/IconOSilver";
import IconXBlack from "../../assets/IconXBlack";
import IconXSilver from "../../assets/IconXSilver";
import Logo from "../../assets/Logo";
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 327px;
  height: 205px;
  border-radius: 15px;
  background-color: #1f3641;
  border-bottom: 7px solid #10212a;
  border-left: none;
  border-right: none;
  border-top: none;
  margin-bottom: 30px;
  margin-top: 60px;
  @media screen and (min-width: 768px) {
    width: 460px;
    height: 205px;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PlayersHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 279px;
  height: 72px;
  border-radius: 10px;
  background-color: #1a2a33;
  margin-top: 15px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 412px;
    height: 72px;
  }
`;
interface X {
  choosePlayer: string;
}
interface Y {
  choosePlayer: string;
}
const Xholder = styled.div<X>`
  width: 131px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.choosePlayer === "X" ? "#a8bfc9" : "#1a2a33"};
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.choosePlayer === "X" ? "#a8bfc9" : "#a8bfc90d"};
  }
  @media screen and (min-width: 768px) {
    width: 198px;
  }
`;
const Oholder = styled.div<Y>`
  width: 131px;
  height: 54px;
  background-color: ${(props) =>
    props.choosePlayer === "O" ? "#a8bfc9" : "#1a2a33"};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.choosePlayer === "O" ? "#a8bfc9" : "#a8bfc90d"};
  }
  @media screen and (min-width: 768px) {
    width: 198px;
  }
`;
const Paragraph1 = styled.p`
  color: #a8bfc9;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
`;
const Paragraph2 = styled.p`
  color: #a8bfc9;
  font-weight: 500;
  opacity: 50%;
  text-transform: uppercase;
  font-size: 14px;
`;
const Button = styled.button`
  background-color: #31c3bd;
  width: 327px;
  height: 56px;
  color: #1a2a33;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
  border-bottom: 5px solid #118c87;
  border-left: none;
  border-right: none;
  border-top: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #65e9e4;
  }
  @media screen and (min-width: 768px) {
    width: 460px;
    height: 67px;
  }
`;
type Prop = {
  setXIsNext: (boolean: boolean) => void;
  setGame: (boolean: boolean) => void;
};
const ChoosePlayer = (props: Prop) => {
  const [choosePlayer, setChoosePlayer] = useState("X");

  return (
    <Main>
      <Logo />
      <Holder>
        <Paragraph1>pick player 1's mark</Paragraph1>
        <PlayersHolder>
          <Xholder
            choosePlayer={choosePlayer}
            onClick={() => setChoosePlayer("X")}
          >
            {choosePlayer === "X" ? <IconXBlack /> : <IconXSilver />}
          </Xholder>
          <Oholder
            choosePlayer={choosePlayer}
            onClick={() => setChoosePlayer("O")}
          >
            {choosePlayer === "O" ? <IconOBlack /> : <IconOSilver />}
          </Oholder>
        </PlayersHolder>
        <Paragraph2>remember : X goes first</Paragraph2>
      </Holder>
      <Button onClick={() => props.setGame(true)}>NEW GAME (VS PLAYER)</Button>
    </Main>
  );
};

export default ChoosePlayer;
