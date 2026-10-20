import { Button } from "@/components/ui/button";

export default function Board({ board }: { board: number[][] }) {
  return (
    <>
      {board.map((row: number[], index) => (
        <div key={index} className="flex justify-around">
          {row.map((cell: number, index2) => (
            <Button
              key={index2}
              type="button"
              variant="ghost"
              size="icon"
              aria-label={cell === 0 ? "Empty tile" : `Tile ${cell}`}
              className={`size-16 rounded-lg border border-white text-base font-normal text-white transition ${
                cell === 0 ? "scale-95 bg-transparent" : "bg-teal-600"
              } `}
            >
              {cell}
            </Button>
          ))}
        </div>
      ))}
    </>
  );
}
