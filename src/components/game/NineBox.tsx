import styled from "styled-components";
import React, { useState, ReactNode, useEffect } from "react";
import IconO from "../../assets/IconO";
import IconX from "../../assets/IconX";

import IconXHover from "../../assets/IconXHover";
import Header from "./Header";
import Footer from "./Footer";
import Restart from "../endgame/Restart";
import Tie from "../endgame/Tie";
import WinnerO from "../endgame/WinnerO";
import WinnerX from "../endgame/WinnerX";

import ChoosePlayer from "../gamemenu/ChoosePlayer";
const Holder = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
`;
const Box = styled.div`
  background-color: #1f3641;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 10px;
  position: relative;
  border-bottom: 6px solid #10212a;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

type SquareValue = "X" | "O" | null;

const calculateWinner = (squares: SquareValue[]): SquareValue => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

interface SquareProps {
  onClick(): void;
  value: SquareValue;
}
const Square: React.FC<SquareProps> = (props) => {
  function mark() {
    if (props.value === "X") {
      return <IconX />;
    } else if (props.value === "O") {
      return <IconO />;
    } else {
      return null;
    }
  }
  return <Box onClick={props.onClick}>{mark()}</Box>;
};
interface BoardProps {
  onClick(i: number): void;
  squares: SquareValue[];
}
const Board: React.FC<BoardProps> = (props) => {
  const renderSquare = (i: number): ReactNode => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };
  return (
    <>
      <Box>{renderSquare(0)}</Box>
      <Box>{renderSquare(1)}</Box>
      <Box>{renderSquare(2)}</Box>
      <Box>{renderSquare(3)}</Box>
      <Box>{renderSquare(4)}</Box>
      <Box>{renderSquare(5)}</Box>
      <Box>{renderSquare(6)}</Box>
      <Box>{renderSquare(7)}</Box>
      <Box>{renderSquare(8)}</Box>
    </>
  );
};
const Game: React.FC = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [game, setGame] = useState(false);
  const [history, setHistory] = useState<{ squares: SquareValue[] }[]>([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const handleClick = (i: number): void => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    console.log(newHistory);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(
      newHistory.concat([
        {
          squares: squares,
        },
      ])
    );
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const [quitWinner, setQuitWinner] = useState(true);
  const [quitWinnerO, setQuitWinnerO] = useState(true);
  const [quitTie, setQuitTie] = useState(true);
  const newHistory = history.slice(0, stepNumber + 1);
  const [countX, setCountX] = useState(1);
  function checkWinner() {
    if (winner === "X") {
      if (quitWinner) {
        return (
          <WinnerX
            xIsNext={xIsNext}
            setStepNumber={setStepNumber}
            setXIsNext={setXIsNext}
            setQuitWinner={setQuitWinner}
          />
        );
      }
    } else if (winner === "O") {
      if (quitWinnerO) {
        return (
          <WinnerO
            xIsNext={xIsNext}
            setStepNumber={setStepNumber}
            setXIsNext={setXIsNext}
            setQuitWinnerO={setQuitWinnerO}
          />
        );
      }
    } else if (!winner && newHistory.length === 10) {
      if (quitTie) {
        return (
          <Tie
            xIsNext={xIsNext}
            setStepNumber={setStepNumber}
            setXIsNext={setXIsNext}
            setQuitTie={setQuitTie}
          />
        );
      }
    }
  }
  return (
    <>
      {!game ? (
        <ChoosePlayer setXIsNext={setXIsNext} setGame={setGame} />
      ) : (
        <>
          <Header
            xIsNext={xIsNext}
            setStepNumber={setStepNumber}
            setXIsNext={setXIsNext}
            setQuitTie={setQuitTie}
            setQuitWinner={setQuitWinner}
            setQuitWinnerO={setQuitWinnerO}
          />

          <Holder>
            <Board squares={current.squares} onClick={(i) => handleClick(i)} />
            {checkWinner()}
          </Holder>
        </>
      )}
    </>
  );
};
export default Game;
