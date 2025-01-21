"use client";

import React, { useEffect } from "react";
import { useState } from "react";
interface TimeCount {
  years: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
const getTimeLeft = (expiry: string): TimeCount => {
  let years = "0";
  let days = "0";
  let hours = "0";
  let minutes = "0";
  let seconds = "0";

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      years,
      days,
      hours,
      minutes,
      seconds,
    };
  }
  // years = Math.floor(difference / (1000 * 60 * 60 * 24)).toString();
  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const scn = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
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

const timer = ({ launcDate }: { launcDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launcDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launcDate));
    }, 1000);
  }, [launcDate]);
  return (
    <div className="flex justify-center lg:justify-start mt-10 gap-4">
      <span className="flex flex-col justify-center items-center bg-black text-white text=3xl lg:text-5xl w-36 py-3 shadow-lg rounded">
        {timeLeft.days}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Days
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-white text=3xl lg:text-5xl w-36 py-3 shadow-lg rounded">
        {timeLeft.hours}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Hours
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-white text=3xl lg:text-5xl w-36 py-3 shadow-lg rounded">
        {timeLeft.minutes}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Minute
        </small>
      </span>
      <span className="flex flex-col justify-center items-center bg-black text-white text=3xl lg:text-5xl w-36 py-3 shadow-lg rounded">
        {timeLeft.seconds}
        <small className="text-xs lg:text-sm uppercase font-semibold text-white">
          Second
        </small>
      </span>
    </div>
  );
};

export default timer;
