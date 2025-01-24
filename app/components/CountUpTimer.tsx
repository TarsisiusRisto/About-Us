"use client";
import React, { useEffect, useState } from "react";

interface TimeCount {
  years: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
const getTimeElapsed = (startDate: string): TimeCount => {
  let years = "0";
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date().getTime() - new Date(startDate).getTime();
  if (difference <= 0) {
    return { years, days, hours, minutes, seconds };
  }
  const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const totalYears = Math.floor(totalDays / 365);
  const remainingDays = totalDays % 365;

  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const scn = Math.floor((difference / 1000) % 60);

  years = totalYears.toString();
  days = remainingDays < 10 ? `0${remainingDays}` : remainingDays.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = scn < 10 ? `0${scn}` : scn.toString();

  return {
    years,
    days,
    hours,
    minutes,
    seconds,
  };
};

const CountUpTimer = ({ launcDate }: { launcDate: string }) => {
  const [timeElapsed, setTimeElapsed] = useState<TimeCount>(
    getTimeElapsed(launcDate)
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(getTimeElapsed(launcDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [launcDate]);
  return (
    <div>
      <div className="flex justify-center lg:justify-start mt-10 gap-4">
        <span className="flex flex-col justify-center items-center bg-boxTimer text-white text=3xl lg:text-5xl w-36 py-3 shadow-lg rounded">
          {timeElapsed.days}
          <small className="text-xs lg:text-sm uppercase font-semibold text-white">
            Days
          </small>
        </span>
        <span className="flex flex-col justify-center items-center bg-boxTimer text-white text=3xl lg:text-5xl w-36 py-3 shadow-lg rounded">
          {timeElapsed.hours}
          <small className="text-xs lg:text-sm uppercase font-semibold text-white">
            Hours
          </small>
        </span>
        <span className="flex flex-col justify-center items-center bg-boxTimer text-white text=3xl lg:text-5xl w-36 py-3 shadow-lg rounded">
          {timeElapsed.minutes}
          <small className="text-xs lg:text-sm uppercase font-semibold text-white">
            Minute
          </small>
        </span>
        <span className="flex flex-col justify-center items-center bg-boxTimer text-white text=3xl lg:text-5xl w-36 py-3 shadow-lg rounded">
          {timeElapsed.seconds}
          <small className="text-xs lg:text-sm uppercase font-semibold text-white">
            Second
          </small>
        </span>
      </div>
    </div>
  );
};

export default CountUpTimer;
