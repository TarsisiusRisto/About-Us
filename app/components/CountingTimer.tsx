import React, { useEffect, useState } from "react";

const CountingTimer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [years, setYears] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const target = new Date("12/31/2025 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinute(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSecond(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {partyTime ? (
        <h1>Happy</h1>
      ) : (
        <div className="timer-wrapper">
          <div className="timer-iner">
            <div className="timer-segment">
              <span className="time">{days}</span>
              <span className="label">Days</span>
            </div>
            <div className="timer-segment">
              <span className="time">{hours}</span>
              <span className="label">Hours</span>
            </div>
            <div className="timer-segment">
              <span className="time">{minute}</span>
              <span className="label">Minute</span>
            </div>
            <div className="timer-segment">
              <span className="time">{second}</span>
              <span className="label">Second</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountingTimer;
