import { IoMdArrowDropup } from "react-icons/io";
import { Button } from "@/components/ui/button";
import type { Direction } from "./GameLogic";

export default function GameControls({
  move,
}: {
  move: (direction: Direction) => void;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-1">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Move up"
        className="size-8 rounded bg-gray-950"
        onClick={() => move("up")}
      >
        <IoMdArrowDropup className="size-8" />
      </Button>
      <div className="space-x-1">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Move left"
          className="size-8 rounded bg-gray-950"
          onClick={() => move("left")}
        >
          <IoMdArrowDropup className="size-8 -rotate-90" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Move down"
          className="size-8 rounded bg-gray-950"
          onClick={() => move("down")}
        >
          <IoMdArrowDropup className="size-8 rotate-180" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Move right"
          className="size-8 rounded bg-gray-950"
          onClick={() => move("right")}
        >
          <IoMdArrowDropup className="size-8 rotate-90" />
        </Button>
      </div>
    </div>
  );
}
