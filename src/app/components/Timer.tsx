import { useEffect, useState } from "react";

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

export default function Timer({
  isRunning,
  resetKey,
}: {
  isRunning: boolean;
  resetKey: number;
}) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    setElapsedSeconds(0);
  }, [resetKey]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      setElapsedSeconds((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div className="grid w-40 grid-cols-2 items-center justify-around rounded-lg border border-white p-2">
      <div className="text-center">time</div>
      <div
        className="flex h-8 w-16 items-center justify-center whitespace-nowrap rounded-lg border border-white"
        aria-live="polite"
      >
        {formatTime(elapsedSeconds)}
      </div>
    </div>
  );
}
