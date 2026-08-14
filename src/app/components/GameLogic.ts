export type Direction = "up" | "right" | "down" | "left";
export type BoardState = number[][];

export const WINNING_BOARD: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
] as const;
const FLATTENED_WINNING_BOARD = WINNING_BOARD.flat();
const BOARD_SIZE = WINNING_BOARD.length;
const LAST_INDEX = BOARD_SIZE - 1;

export function move(
  board: BoardState,
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
      if (emptyCell.x < LAST_INDEX) {
        newEmptyCell = { x: emptyCell.x + 1, y: emptyCell.y };
      } else {
        return board;
      }
      break;
    case "down":
      if (emptyCell.y < LAST_INDEX) {
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
  const newBoard = board.map((row) => [...row]);
  newBoard[emptyCell.y]![emptyCell.x] =
    newBoard[newEmptyCell.y]![newEmptyCell.x]!;
  newBoard[newEmptyCell.y]![newEmptyCell.x] = 0;
  return newBoard;
}
// Must have an even number of inversions to be solvable
export function isSolvable(arr: BoardState) {
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
export function checkWin(board: BoardState) {
  const isWin = board
    .flat()
    .every((cell, i) => cell === FLATTENED_WINNING_BOARD[i]);
  return isWin;
}
export function findEmptyCell(board: BoardState) {
  for (const [y, row] of board.entries()) {
    const x = row.indexOf(0);
    if (x !== -1) {
      return { x, y };
    }
  }

  throw new Error("Board does not contain an empty cell");
}

export function shuffleArray(board: BoardState): BoardState {
  const flattenedBoard = board.flat();

  for (let attempt = 0; attempt < 100; attempt += 1) {
    const shuffled = [...flattenedBoard];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [
        shuffled[swapIndex]!,
        shuffled[index]!,
      ];
    }

    const nextBoard = Array.from({ length: BOARD_SIZE }, (_, row) =>
      shuffled.slice(row * BOARD_SIZE, (row + 1) * BOARD_SIZE),
    );

    if (isSolvable(nextBoard) && !checkWin(nextBoard)) {
      return nextBoard;
    }
  }

  // Keep shuffling bounded even if Math.random is mocked or unavailable.
  return move(WINNING_BOARD, { x: LAST_INDEX, y: LAST_INDEX }, "left");
}
