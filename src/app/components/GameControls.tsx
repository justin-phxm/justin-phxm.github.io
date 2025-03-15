import { IoMdArrowDropup } from "react-icons/io";
import { type Direction } from "./GameLogic";

export default function GameControls({
  move,
}: {
  move: (direction: Direction) => void;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-1">
      <button
        className="rounded bg-gray-950 text-3xl"
        onClick={() => move("up")}
      >
        <IoMdArrowDropup />
      </button>
      <div className="space-x-1">
        <button
          className="rounded bg-gray-950 text-3xl"
          onClick={() => move("left")}
        >
          <IoMdArrowDropup className="-rotate-90" />
        </button>
        <button
          className="rounded bg-gray-950 text-3xl"
          onClick={() => move("down")}
        >
          <IoMdArrowDropup className="rotate-180" />
        </button>
        <button
          className="rounded bg-gray-950 text-3xl"
          onClick={() => move("right")}
        >
          <IoMdArrowDropup className="rotate-90" />
        </button>
      </div>
    </div>
  );
}
