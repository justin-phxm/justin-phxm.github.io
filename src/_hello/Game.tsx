import { useState, useEffect } from "preact/hooks";
import Timer from "./Timer";
import { route } from "preact-router";
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
      shuffleArray(newBoard);
    } else {
      // Update the board state when no reshuffling is needed
      setBoard(newBoard);
    }
    setMoves(0);
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
    setTimeout(() => {
      route("/about-me");
    }, 1000);
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
        class="p-4 rounded-lg w-full flex gap-4 flex-col cursor-pointer bg-slate-900 bg-opacity-80 shadow-inner hover:outline focus:outline outline-green-500"
        onKeyDown={getKeyAndMove}
        tabIndex={0}>
        {board.map((row: number[]) => (
          <div className=" flex justify-around">
            {row.map((cell: number) => (
              <button
                className={`w-16 h-16 text-white transition rounded-lg border border-white justify-center items-center inline-flex ${
                  cell === 0 ? " bg-transparent scale-95 " : "bg-teal-600"
                } `}>
                {cell}
              </button>
            ))}
          </div>
        ))}
        <button class="p-3 bg-orange-300 rounded-lg justify-center items-center">
          <div
            onClick={() => shuffleArray(board)}
            class=" text-gray-950 text-sm ">
            start-game
          </div>
        </button>
      </section>
      <div className="py-4 flex flex-col w-full bg-opacity-20 text-white text-sm items-center rounded-lg">
        <div class="p-4 bg-slate-900 bg-opacity-20 rounded-lg">
          <div className=" text-left">
            <p>// use keyboard </p>
            <p>// arrows to play</p>
          </div>

          <div
            id="buttons"
            class="w-full flex flex-col items-center gap-1 pt-5">
            <button class=" p-2 bg-gray-950" onClick={moveUp}>
              <img src="arrow-button.svg" alt="" />
            </button>
            <div class="grid grid-cols-3 gap-1">
              <button class=" bg-gray-950" onClick={moveLeft}>
                <img src="arrow-button.svg" alt="" class="-rotate-90 p-2 " />
              </button>
              <button class="bg-gray-950" onClick={moveDown}>
                <img src="arrow-button.svg" alt="" class="rotate-180 p-2" />
              </button>
              <button class="bg-gray-950" onClick={moveRight}>
                <img src="arrow-button.svg" alt="" class="rotate-90 p-2 " />
              </button>
            </div>
          </div>
        </div>

        <div class="border border-white rounded-lg inline-flex m-2 p-2 items-center">
          moves &emsp;
          <div className="border border-white rounded-lg p-4 -m-2 inline-flex">
            {moves}
          </div>
        </div>
        <Timer shuffleArray={shuffleArray} myArray={myArray} />
      </div>
    </>
  );
}
