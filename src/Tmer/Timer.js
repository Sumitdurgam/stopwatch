import React, { useState, useEffect, useRef  } from "react";
// import './timer.css'; 

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerId = useRef(null);

    // useEffect(() => {
    //     if (isRunning) {
    //       timerId.current = setInterval(() => {
    //         setTime((prevTime) => prevTime + 1);
    //       }, 10);
    //     } else {
    //       clearInterval(timerId.current);
    //       timerId.current = null; 
    //     }
    //     return () => clearInterval(timerId.current);
    //   }, [isRunning]);
      
    useEffect(() => {
      if (isRunning) {
        const id = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
        timerId.current = id;
        return () => clearInterval(id);
      } else {
        clearInterval(timerId.current);
        timerId.current = null; 
      }
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);    
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    }

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;                        
      };

    return (
        <div style={styles}>
          <h1>Stopwatch</h1>
          <p>Time: {formatTime()}</p>
          {/* <p>Time: {time} seconds</p> */}
          <button>
          <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>         
          <button onClick={handleReset}>Reset</button>
          </button>
          
        </div>
      )
}

const styles = {
      display: "flex",
      flexDirection: "column",
      // flex-grow: 1;
      alignItems: "top",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      marginRight: '80%',
    };
 

export default Timer;


