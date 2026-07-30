"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Board from "./Board";
import GameControls from "./GameControls";
import {
  type Direction,
  WINNING_BOARD,
  checkWin,
  findEmptyCell,
  move,
  shuffleArray,
} from "./GameLogic";
import Timer from "./Timer";
const KEY_MAP = {
  ArrowLeft: "left",
  ArrowUp: "up",
  ArrowRight: "right",
  ArrowDown: "down",
} satisfies Record<string, Direction>;
export default function Game() {
  const router = useRouter();
  const [board, setBoard] = useState(WINNING_BOARD);
  const [emptyCell, setEmptyCell] = useState({ x: 2, y: 2 });
  const [moves, setMoves] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setBoard(shuffleArray(WINNING_BOARD));
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (checkWin(board)) {
      setTimeout(() => {
        router.push("/about-me");
      }, 1000);
    }
    const newEmptyCell = findEmptyCell(board);
    setEmptyCell(newEmptyCell);
  }, [board, router, isReady]);
  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  // https://stackoverflow.com/a/12646864/114157

  function getKeyAndMove(e: React.KeyboardEvent<HTMLElement>) {
    const key = e.key;
    if (key in KEY_MAP) {
      const i = KEY_MAP[key as keyof typeof KEY_MAP];
      const newBoard = move(board, emptyCell, i);
      setBoard(newBoard);
      setMoves(moves + 1);
    }
  }
  function moveEmptyCell(direction: Direction) {
    const newBoard = move(board, emptyCell, direction);
    if (newBoard !== board) {
      setBoard(newBoard);
      setMoves(moves + 1);
    }
  }
  function handleRestart() {
    console.log("handleRestart");
    setBoard(shuffleArray(board));
    setMoves(0);
  }

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <section
        className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-slate-900/80 p-4 shadow-inner outline-green-500 hover:outline focus:outline"
        onKeyDown={getKeyAndMove}
        tabIndex={0}
      >
        <Board board={board} />
        <button
          type="button"
          className="items-center justify-center rounded-lg bg-orange-300 p-3"
        >
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
        <GameControls move={moveEmptyCell} />
        <div className="grid w-40 grid-cols-2 items-center justify-around rounded-lg border border-white p-2">
          <div className="text-center">moves</div>
          <div className="flex h-8 w-12 items-center justify-center rounded-lg border border-white">
            {moves}
          </div>
        </div>
        <Timer />
        <div className="flex w-40 flex-row gap-2">
          <button
            type="button"
            onClick={handleRestart}
            className="text-nowrap rounded-md bg-orange-300 p-2 text-black outline-none ring-white transition-opacity hover:opacity-80 focus:ring-2"
          >
            restart-game
          </button>
          <Link
            className="flex flex-1 items-center justify-center rounded-lg border border-white p-2"
            href={"/about-me"}
          >
            skip
          </Link>
        </div>
      </div>
    </div>
  );
}
