"use client";

import React from "react";
import CounterDisplay from "@/app/ui/counter/counter-display";
import CounterControls from "@/app/ui/counter/counter-controls";
import { useEffect } from "react";

export default function Card() {
  const [count, setCount] = React.useState(0);
  const [flash, setFlash] = React.useState(false);

  useEffect(() => {
    setFlash(true);
    // remove flash after set duration
    const timer = setTimeout(() => setFlash(false), 300);
    // cleanup
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='bg-slate-200 flex flex-col border border-slate-400 p-6 gap-4 justify-center items-center rounded-lg shadow-lg'>
        {/* <p className='text-md font-medium'>Counter</p> */}
        <CounterDisplay count={count} flash={flash} />
        <CounterControls setCount={setCount} />
      </div>
    </div>
  );
}
