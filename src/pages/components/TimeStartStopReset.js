import React, { useEffect, useState } from "react";

const TimeStartStopReset = () => {
    const [counter, setCounter] = useState(0);
    /* const [isStart, setIsstart] = useState(false);
 
 useEffect(() => {
     let timerId;
     if (isStart) {
         timerId = setInterval(() => {
             setCounter((prv) => prv + 1)
         },1000)
     }
     return () => {
         clearInterval(timerId)
     }
 
 }, [isStart])
 
 const handleToStart = () => {
     setIsstart(true);
 }
 const handleToStop = () => {
     setIsstart(false);
 }
 const handleToReset = () => {
     setCounter(0);
     setIsstart(false);
 }*/
    let TimerCountInterval;
    const Start = () => {
        TimerCountInterval = setInterval(() => {
            setCounter((prv) => prv + 1);
        }, 1000);
    }
    const Stop = () => {
        clearInterval(TimerCountInterval);
        console.log("hello", counter, TimerCountInterval)
        setCounter(counter);
    }
    const Reset = () => {
        clearInterval(TimerCountInterval);
        console.log("hello", counter, TimerCountInterval)
        setCounter(0);
    }



    return <div>
        <p>{counter}</p>
        {/* <button onClick={() => handleToStart()}>Start</button>
        <button onClick={() => handleToStop()}>Stop</button>
        <button onClick={() => handleToReset()}>Reset</button> */}
        <button onClick={() => Start()}>Start</button>
        <button onClick={() => Stop()}>Stop</button>
        <button onClick={() => Reset()}>Reset</button>
    </div>
};

export default TimeStartStopReset;