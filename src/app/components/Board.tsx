import React from "react";

export default function Board({ board }: { board: number[][] }) {
  return (
    <>
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
    </>
  );
}
