export type Direction = "up" | "right" | "down" | "left";
export const WINNING_BOARD: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
] as const;
const FLATTENED_WINNING_BOARD = WINNING_BOARD.flat();
const ARRAY_SIZE = [WINNING_BOARD.length, WINNING_BOARD[0]!.length] as const;
export function move(
  board: number[][],
  emptyCell: { x: number; y: number },
  direction: Direction,
) {
  let newEmptyCell: { x: number; y: number };
  switch (direction) {
    case "up":
      if (emptyCell.y > 0) {
        newEmptyCell = { ...emptyCell, y: emptyCell.y - 1 };
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
export function isSo(arr: number[][]) {
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
export function checkWin(board: number[][]) {
  const isWin = board
    .flat()
    .every((cell, i) => cell === FLATTENED_WINNING_BOARD[i]);
  return isWin;
}
export function findEmptyCell(array: number[][]) {
  let emptyCell: { x: number; y: number } | undefined;
  array.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 0) {
        emptyCell = { x, y };
      }
      if (emptyCell) return;
    });
    if (emptyCell) return emptyCell;
  });
  return emptyCell as { x: number; y: number };
}
export function shuffleArray(array: number[][]) {
  let newBoard = array.flat();
  newBoard = newBoard.reduceRight((_, __, idx, arr) => {
    const j = Math.floor(Math.random() * (idx + 1));
    [arr[idx], arr[j]] = [arr[j]!, arr[idx]!];
    return arr;
  }, newBoard);
  const finalBoard = newBoard.reduce((acc, _, i) => {
    const row = Math.floor(i / ARRAY_SIZE[1]);
    if (!acc[row]) {
      acc[row] = [];
    }
    acc[row].push(newBoard[i]!);
    return acc;
  }, [] as number[][]);
  if (finalBoard[1]![1] !== 0) {
    const emptyCell = findEmptyCell(finalBoard);
    [finalBoard[emptyCell.x]![emptyCell.y], finalBoard[1]![1]] = [
      finalBoard[1]![1]!,
      finalBoard[emptyCell.x]![emptyCell.y]!,
    ];
  }
  if (isSo(finalBoard)) {
    return finalBoard;
  }
  return shuffleArray(finalBoard);
}
