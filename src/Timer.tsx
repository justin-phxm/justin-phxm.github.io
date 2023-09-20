import { useState, useEffect } from "preact/hooks";
interface TimerProps {
  shuffleArray: (array: number[][]) => void;
  myArray: number[][];
}
export default function Timer(props: TimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [intervalId, setIntervalId] = useState<undefined | number>(undefined);

  useEffect(() => {
    if (intervalId !== null) {
      clearInterval(intervalId); // Clear the previous interval
    }

    const newIntervalId = setInterval(() => {
      setSeconds((prevTime) => prevTime + 1);
    }, 1000);

    setIntervalId(newIntervalId); // Store the new interval ID
  }, []);
  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
  }, [seconds]);
  function resetTime() {
    clearInterval(intervalId); // Clear the current interval
    setSeconds(0);
    setMinutes(0);
    const newIntervalId = setInterval(() => {
      setSeconds((prevTime) => prevTime + 1);
    }, 1000);
    setIntervalId(newIntervalId); // Store the new interval ID
    props.shuffleArray(props.myArray);
  }
  function formatTime(time: number) {
    let formattedTime = time.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return formattedTime;
  }
  return (
    <>
      <div class="border border-white rounded-lg inline-flex m-2 p-2 items-center">
        time &emsp;
        <div className="border border-white rounded-lg p-4 -m-2 inline-flex">
          {formatTime(minutes)}: {formatTime(seconds)}
        </div>
      </div>
      <button
        onClick={resetTime}
        class=" text-black bg-orange-300 m-4 hover:opacity-80 rounded-md outline-none transition-all duration-300"
      >
        restart-game
      </button>
    </>
  );
}
