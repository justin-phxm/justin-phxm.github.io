"use client";
import { IoMdArrowDropup } from "react-icons/io";

import { useEffect, useState } from "react";
import Timer from "./Timer";
import { useRouter } from "next/navigation";
function move(
  board: number[][],
  emptyCell: { x: number; y: number },
  direction: "up" | "right" | "down" | "left",
) {
  let newEmptyCell: { x: number; y: number };
  switch (direction) {
    case "up":
      if (emptyCell.y > 0) {
        newEmptyCell = { x: emptyCell.x, y: emptyCell.y - 1 };
      } else {
        return board;
      }
      break;
    case "right":
      if (emptyCell.x < 2) {
        newEmptyCell = { x: emptyCell.x + 1, y: emptyCell.y };
      } else {
        return board;
      }
      break;
    case "down":
      if (emptyCell.y < 2) {
        newEmptyCell = { x: emptyCell.x, y: emptyCell.y + 1 };
      } else {
        return board;
      }
      break;
    case "left":
      if (emptyCell.x > 0) {
        newEmptyCell = { x: emptyCell.x - 1, y: emptyCell.y };
      } else {
        return board;
      }
      break;
  }
  const newBoard = [...board];
  newBoard[emptyCell.y]![emptyCell.x] =
    newBoard[newEmptyCell.y]![newEmptyCell.x]!;
  newBoard[newEmptyCell.y]![newEmptyCell.x] = 0;
  return newBoard;
}
// Must have an even number of inversions to be solvable
function isSo(arr: number[][]) {
  const puzzle = arr.flat();
  const invCount = getInvCount(puzzle);
  const isSolvable = invCount % 2 === 0;
  return isSolvable;
}
function getInvCount(arr: number[]) {
  return arr.reduce((acc, curr, i) => {
    if (curr === 0) return acc;
    return acc + arr.slice(i + 1).filter((x) => x < curr).length;
  }, 0);
}
const myArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];
const ARRAY_SIZE = [myArray.length, myArray[0]!.length] as const;
function checkWin(board: number[][]) {
  board.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== myArray[y]![x]) {
        return false;
      }
    });
  });
  return true;
}
function findEmptyCell(array: number[][]) {
  array.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 0) {
        return { x, y };
      }
    });
  });
  return { x: 0, y: 0 };
}
function shuffleArray(array: number[][]) {
  const newBoard = [...array];
  for (let y = ARRAY_SIZE[1] - 1; y > 0; y--) {
    for (let x = ARRAY_SIZE[0] - 1; x > 0; x--) {
      const j = Math.floor(Math.random() * (y + 1));
      const k = Math.floor(Math.random() * (x + 1));
      const temp = array[j]![k]!;
      newBoard[j]![k] = array[y]![x]!;
      newBoard[y]![x] = temp!;
    }
  }
  const emptyCell = findEmptyCell(newBoard);
  newBoard[emptyCell.y]![emptyCell.x] = newBoard[1]![1]!;
  newBoard[1]![1] = 0;
  // Check if reshuffling is needed and perform it only when necessary
  if (!isSo(newBoard)) {
    return shuffleArray(newBoard);
  }
  return newBoard;
}
export default function Game() {
  const router = useRouter();
  const [board, setBoard] = useState(myArray);
  const [emptyCell, setEmptyCell] = useState({ x: 2, y: 2 });
  const [moves, setMoves] = useState(0);
  useEffect(() => {
    const newEmptyCell = findEmptyCell(board);
    setEmptyCell(newEmptyCell);
  }, [board]);
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  // https://stackoverflow.com/a/12646864/114157
  // Game cannot be solved if the number of inversions is odd

  // Helper function to find the empty cell
  function getKeyAndMove(e: React.KeyboardEvent<HTMLElement>) {
    const key = e.key;
    switch (key) {
      case "ArrowLeft": //left arrow key
        move(board, emptyCell, "left");
        if (checkWin(board)) {
          setTimeout(() => {
            router.push("/about-me");
          }, 1000);
        }
        break;
      case "ArrowUp": //Up arrow key
        move(board, emptyCell, "up");
        if (checkWin(board)) {
          setTimeout(() => {
            router.push("/about-me");
          }, 1000);
        }
        break;
      case "ArrowRight": //right arrow key
        move(board, emptyCell, "right");
        if (checkWin(board)) {
          setTimeout(() => {
            router.push("/about-me");
          }, 1000);
        }
        break;
      case "ArrowDown": //down arrow key
        move(board, emptyCell, "down");
        if (checkWin(board)) {
          setTimeout(() => {
            router.push("/about-me");
          }, 1000);
        }
        break;
    }
  }

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <section
        className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-slate-900/80 p-4 shadow-inner outline-green-500 hover:outline focus:outline"
        onKeyDown={getKeyAndMove}
        tabIndex={0}
      >
        {board.map((row: number[], index) => (
          <div key={index} className="flex justify-around">
            {row.map((cell: number, index2) => (
              <button
                key={index2}
                className={`inline-flex size-16 items-center justify-center rounded-lg border border-white text-white transition ${
                  cell === 0 ? "scale-95 bg-transparent" : "bg-teal-600"
                } `}
              >
                {cell}
              </button>
            ))}
          </div>
        ))}
        <button className="items-center justify-center rounded-lg bg-orange-300 p-3">
          <div
            onClick={() => {
              setBoard(shuffleArray(board));
              setMoves(0);
            }}
            className="text-sm text-gray-950"
          >
            start-game
          </div>
        </button>
      </section>
      <div className="flex w-full flex-col items-center gap-2 text-sm text-white">
        <div>
          <p className="whitespace-nowrap">{"// use keyboard"} </p>
          <p className="whitespace-nowrap">{"// arrows to play"}</p>
        </div>
        <div className="flex w-full flex-col items-center gap-1">
          <button
            className="rounded bg-gray-950 text-3xl"
            onClick={() => move(board, emptyCell, "up")}
          >
            <IoMdArrowDropup />
          </button>
          <div className="space-x-1">
            <button
              className="rounded bg-gray-950 text-3xl"
              onClick={() => move(board, emptyCell, "left")}
            >
              <IoMdArrowDropup className="-rotate-90" />
            </button>
            <button
              className="rounded bg-gray-950 text-3xl"
              onClick={() => move(board, emptyCell, "down")}
            >
              <IoMdArrowDropup className="rotate-180" />
            </button>
            <button
              className="rounded bg-gray-950 text-3xl"
              onClick={() => move(board, emptyCell, "right")}
            >
              <IoMdArrowDropup className="rotate-90" />
            </button>
          </div>
        </div>

        <div className="grid w-40 grid-cols-2 items-center justify-around rounded-lg border border-white p-2">
          <div className="text-center">moves</div>
          <div className="flex h-8 w-12 items-center justify-center rounded-lg border border-white">
            {moves}
          </div>
        </div>
        <Timer
          shuffleArray={shuffleArray}
          setMoves={setMoves}
          myArray={myArray}
        />
      </div>
    </div>
  );
}
