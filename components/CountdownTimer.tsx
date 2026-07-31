"use client";

import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // November 28th, 2026, 09:00:00 AM West Africa Time (WAT)
    const targetDate = new Date("2026-11-28T09:00:00+01:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto flex flex-col items-center justify-center border-b border-black/10">
      <div className="text-center mb-6">
        <p className="text-google-blue text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
          Countdown to DevFest
        </p>
        <h2 className="font-akira font-black text-2xl sm:text-4xl text-black tracking-tight uppercase leading-none">
          THE CLOCK IS TICKING
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
        <CountdownBox value={timeLeft.days} label="Days" />
        <CountdownBox value={timeLeft.hours} label="Hours" />
        <CountdownBox value={timeLeft.minutes} label="Minutes" />
        <CountdownBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  // Pad with leading zero if less than 10
  const formattedValue = value < 10 ? `0${value}` : value.toString();

  return (
    <div className="flex flex-col items-center justify-center bg-white border-2 border-black rounded-2xl w-24 h-24 sm:w-32 sm:h-32 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all">
      <span suppressHydrationWarning className="font-akira font-black text-3xl sm:text-5xl text-black tracking-tighter">
        {formattedValue}
      </span>
      <span className="text-gray-600 font-bold text-xs sm:text-sm uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}
