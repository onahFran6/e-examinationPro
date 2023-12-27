"use client";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { decrementTimer, finishExam } from "@/store/slice/examSlice";
import { useRouter } from "next/navigation";
import { TimerProps } from "@/types/interfaces";

const Timer: React.FC<TimerProps> = ({ timeRemaining, isAuthenticated }) => {
  const router = useRouter();

  const timerRef = useRef(timeRemaining); // Store time in a ref for consistent updates
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      timerRef.current -= 1;

      if (timerRef.current <= 0) {
        clearInterval(intervalId);
        dispatch(finishExam());
        if (isAuthenticated) {
          router.push("/thank");
          return null;
        }
      } else {
        dispatch(decrementTimer()); // Update Redux store on each decrement
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timerRef.current / 60);
  const seconds = timerRef.current % 60;

  return (
    <>
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")} minutes
    </>
  );
};

export default Timer;
