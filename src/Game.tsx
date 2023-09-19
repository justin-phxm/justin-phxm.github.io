import { useState, useEffect } from "preact/hooks";
export default function Game() {
  const myArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ];
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
  function shuffleArray(array: number[][]) {
    const newBoard = [...array];
    for (var y = array.length - 1; y > 0; y--) {
      for (var x = array[0].length - 1; x > 0; x--) {
        var j = Math.floor(Math.random() * (y + 1));
        var k = Math.floor(Math.random() * (x + 1));
        var temp = array[j][k];
        newBoard[j][k] = array[y][x];
        newBoard[y][x] = temp;
      }
    }
    const emptyCell = findEmptyCell(newBoard);
    newBoard[emptyCell.y][emptyCell.x] = newBoard[1][1];
    newBoard[1][1] = 0;
    setEmptyCell({ x: 1, y: 1 });
    // Check if reshuffling is needed and perform it only when necessary
    if (!isSo(newBoard)) {
      console.log("reshuffling");
      shuffleArray(newBoard);
    } else {
      // Update the board state when no reshuffling is needed
      setBoard(newBoard);
    }
    setMoves(0);
    // setStartTime(Date.now());
    // setTime(0);
  }

  // Helper function to find the empty cell
  function findEmptyCell(array: number[][]) {
    for (var y = array.length - 1; y >= 0; y--) {
      for (var x = array[0].length - 1; x >= 0; x--) {
        if (array[y][x] === 0) {
          var emptyCell = { x: x, y: y };
          return emptyCell;
        }
      }
    }
    return { x: 2, y: 2 };
  }
  function checkWin() {
    for (var y = 0; y < board.length; y++) {
      for (var x = 0; x < board[0].length; x++) {
        if (board[y][x] !== myArray[y][x]) {
          return;
        }
      }
    }
    alert(`You win! You completed the puzzle in ${moves} moves`);
  }
  function getKeyAndMove(e: { which: any; keyCode: any }) {
    var key_code = e.which || e.keyCode;
    switch (key_code) {
      case 37: //left arrow key
        moveLeft();
        checkWin();
        break;
      case 38: //Up arrow key
        moveUp();
        checkWin();
        break;
      case 39: //right arrow key
        moveRight();
        checkWin();
        break;
      case 40: //down arrow key
        moveDown();
        checkWin();
        break;
    }
  }
  function moveLeft() {
    if (emptyCell.x > 0) {
      const newEmptyCell = { x: emptyCell.x - 1, y: emptyCell.y };

      // Create a new board state by swapping the values
      const newBoard = [...board];
      newBoard[emptyCell.y][emptyCell.x] =
        newBoard[newEmptyCell.y][newEmptyCell.x];
      newBoard[newEmptyCell.y][newEmptyCell.x] = 0;

      // Update both the board and emptyCell states together
      setBoard(newBoard);
      setEmptyCell(newEmptyCell);
      setMoves(moves + 1);
    }
  }
  function moveUp() {
    if (emptyCell.y > 0) {
      // Calculate the new coordinates for the empty cell
      const newEmptyCell = { x: emptyCell.x, y: emptyCell.y - 1 };

      // Create a new board state by swapping the values
      const newBoard = [...board];
      newBoard[emptyCell.y][emptyCell.x] =
        newBoard[newEmptyCell.y][newEmptyCell.x];
      newBoard[newEmptyCell.y][newEmptyCell.x] = 0;

      // Update both the board and emptyCell states together
      setBoard(newBoard);
      setEmptyCell(newEmptyCell);
      setMoves(moves + 1);
    }
  }

  function moveRight() {
    if (emptyCell.x < 2) {
      const newEmptyCell = { x: emptyCell.x + 1, y: emptyCell.y };

      // Create a new board state by swapping the values
      const newBoard = [...board];
      newBoard[emptyCell.y][emptyCell.x] =
        newBoard[newEmptyCell.y][newEmptyCell.x];
      newBoard[newEmptyCell.y][newEmptyCell.x] = 0;

      // Update both the board and emptyCell states together
      setBoard(newBoard);
      setEmptyCell(newEmptyCell);
      setMoves(moves + 1);
    }
  }
  function moveDown() {
    if (emptyCell.y < 2) {
      // Calculate the new coordinates for the empty cell
      const newEmptyCell = { x: emptyCell.x, y: emptyCell.y + 1 };

      // Create a new board state by swapping the values
      const newBoard = [...board];
      newBoard[emptyCell.y][emptyCell.x] =
        newBoard[newEmptyCell.y][newEmptyCell.x];
      newBoard[newEmptyCell.y][newEmptyCell.x] = 0;

      // Update both the board and emptyCell states together
      setBoard(newBoard);
      setEmptyCell(newEmptyCell);
      setMoves(moves + 1);
    }
  }
  // Must have an even number of inversions to be solvable

  function isSo(arr: number[][] = board) {
    let puzzle = squishArray(arr);
    let invCount = getInvCount(puzzle);
    let isSolvable = invCount % 2 === 0;
    return isSolvable;
  }
  function squishArray(arr: number[][]) {
    let newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      newArr = newArr.concat(arr[i]);
    }
    return newArr;
  }
  function getInvCount(arr: number[]) {
    let inv_count = 0;
    for (let i = 0; i < 9 - 1; i++)
      for (let j = i + 1; j < 9; j++)
        if (arr[j] && arr[i] && arr[i] > arr[j]) inv_count++;
    return inv_count;
  }

  return (
    <>
      <section
        class="bg-green-300 rounded-md  cursor-pointer hover:outline focus:outline outline-green-500"
        onKeyDown={getKeyAndMove}
        tabIndex={0}
      >
        {board.map((row: number[]) => (
          <div className=" font-bold text-8xl p-2 ">
            {row.map((cell: number) => (
              <button
                className={`p-2 m-2 ${
                  cell === 0 ? "bg-gray-200" : "bg-green-200"
                }`}
              >
                {cell}
              </button>
            ))}
          </div>
        ))}
      </section>
      <div>Use Arrow Keys to play</div>
      <div id="buttons" class="w-full flex flex-col items-center gap-1 pt-5">
        <button id="console-button" class="bg-green-300" onClick={moveUp}>
          <img src="arrow-button.svg" alt="" />
        </button>
        <div class="grid grid-cols-3 gap-1">
          <button id="console-button" class=" bg-green-300 " onClick={moveLeft}>
            <img src="arrow-button.svg" alt="" class="-rotate-90 " />
          </button>
          <button id="console-button" class="bg-green-300" onClick={moveDown}>
            <img src="arrow-button.svg" alt="" class="rotate-180" />
          </button>
          <button id="console-button" class="bg-green-300" onClick={moveRight}>
            <img src="arrow-button.svg" alt="" class="rotate-90 " />
          </button>
        </div>
      </div>
      <div>Moves: {moves}</div>
    </>
  );
}
