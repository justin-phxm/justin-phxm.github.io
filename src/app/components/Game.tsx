"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Board from "./Board";
import GameControls from "./GameControls";
import {
  checkWin,
  type Direction,
  findEmptyCell,
  move,
  shuffleArray,
  WINNING_BOARD,
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
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState<"ready" | "playing" | "won">(
    "ready",
  );
  const [timerResetKey, setTimerResetKey] = useState(0);

  useEffect(() => {
    setBoard(shuffleArray(WINNING_BOARD));
  }, []);

  useEffect(() => {
    if (gameState !== "playing" || !checkWin(board)) {
      return;
    }

    setGameState("won");
    const timeoutId = setTimeout(() => router.push("/about-me"), 1000);
    return () => clearTimeout(timeoutId);
  }, [board, gameState, router]);

  function moveEmptyCell(direction: Direction) {
    if (gameState === "won") {
      return;
    }

    const newBoard = move(board, findEmptyCell(board), direction);
    if (newBoard === board) {
      return;
    }

    setBoard(newBoard);
    setMoves((count) => count + 1);
    setGameState("playing");
  }

  function getKeyAndMove(e: React.KeyboardEvent<HTMLElement>) {
    const direction = KEY_MAP[e.key as keyof typeof KEY_MAP];
    if (direction) {
      e.preventDefault();
      moveEmptyCell(direction);
    }
  }

  function startGame() {
    setBoard(shuffleArray(WINNING_BOARD));
    setMoves(0);
    setTimerResetKey((key) => key + 1);
    setGameState("playing");
  }

  function handleRestart() {
    startGame();
  }

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <fieldset
        aria-label="Sliding puzzle game"
        className="flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-slate-900/80 p-4 shadow-inner outline-green-500 hover:outline focus:outline"
        onKeyDown={getKeyAndMove}
        tabIndex={0}
      >
        <Board board={board} />
        <button
          type="button"
          onClick={startGame}
          className="items-center justify-center rounded-lg bg-orange-300 p-3"
        >
          <span className="text-sm text-gray-950">start-game</span>
        </button>
      </fieldset>
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
        <Timer isRunning={gameState === "playing"} resetKey={timerResetKey} />
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
