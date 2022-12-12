import { useEffect, useState } from "react";


export const withWidgetTimer = (Component) => {
  
  const WidgetTimerContainer = () => {
    const [timeLeft, settimeLeft] = useState(2 * 60);
    const [isCounting, setIsCounting] = useState(false);

    const getPaadTime = (time) => time.toString().padStart(2, "0");

    const minutes = getPaadTime(Math.floor(timeLeft / 60));
    const seconds = getPaadTime(timeLeft - minutes * 60);

    useEffect(() => {
      const interval = setInterval(() => {
        isCounting && 
        settimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }, 1000);
      
      return () => {
        clearInterval(interval);
      };
    }, [isCounting]);


    const handleUpdate = () => {
      setIsCounting(true);
      settimeLeft(2 * 60);
    };

    const handleStop = () => {
      setIsCounting(false);
    };

    return (
      <Component minutes={minutes} seconds={seconds} handleUpdate={handleUpdate} handleStop={handleStop} />
    );
  };

  return WidgetTimerContainer;
};