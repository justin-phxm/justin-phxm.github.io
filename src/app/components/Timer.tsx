import { useState, useEffect } from "react";

function formatTime(time: number) {
  const formattedTime = time.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  return formattedTime;
}
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    clearInterval(intervalId); // Clear the previous interval

    const newIntervalId = setInterval(() => {
      setSeconds((prevTime) => prevTime + 1);
    }, 1000);

    setIntervalId(newIntervalId); // Store the new interval ID
    return () => {
      clearInterval(newIntervalId); // Clear the interval on unmount
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (minutes === 59) {
      clearInterval(intervalId);
    }
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
  }, [intervalId, minutes, seconds]);
  return (
    <>
      <div className="grid w-40 grid-cols-2 items-center justify-around rounded-lg border border-white p-2">
        <div className="text-center">time</div>
        <div className="flex h-8 w-12 items-center justify-center whitespace-nowrap rounded-lg border border-white">
          {formatTime(minutes)}: {formatTime(seconds)}
        </div>
      </div>
    </>
  );
}
