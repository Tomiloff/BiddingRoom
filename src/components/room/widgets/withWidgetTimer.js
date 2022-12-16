import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setTradingMode } from "../../../stores/reducers/room-reducer";


const mapStateToPropsForTimer = (state) => {
  return {
    room: state.room
  }
};

export const withWidgetTimer = (Component) => {
  
  const WidgetTimerContainer = ({room, setTradingMode}) => {
    const [timeLeft, setTimeLeft] = useState(2 * 60);
    const [isCounting, setIsCounting] = useState(false);
    const [actualMinutes, setActualMinutes] = useState(0);
    const [actualSeconds, setActualSeconds] = useState(0);
    const [counter, setCounter] = useState(0);
  
    const getPaadTime = (time) => time.toString().padStart(2, "0");
    const minutes = getPaadTime(Math.floor(timeLeft / 60));
    const seconds = getPaadTime(timeLeft - minutes * 60);

    if (!room.participants.length) {
      room.participants = room.imitationUser
    }

    const onChangeMinutes = (actualMinutes) => {
      setActualMinutes(actualMinutes);
    };
    const onChangeSeconds = (actualSeconds) => {
      setActualSeconds(actualSeconds);
    };
   

    useEffect(() => {
      const interval = setInterval(() => {
        isCounting && 
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 2 * 60));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, [isCounting]);

    const changeModeForUser = (count, status) => {
      setTradingMode(room.participants[count].id, status);
    };

    useEffect(() => {
      if (actualMinutes === "00" && actualSeconds === "00" ) {
        changeModeForUser(counter, false);
        setCounter(prev => prev + 1);
      } 
      else if (counter === room.participants.length) setCounter(0);
    }, [actualMinutes, actualSeconds]);

    useEffect(() => {
      if (counter < room.participants.length && isCounting)
      changeModeForUser(counter, true);
    }, [isCounting, counter]);

  
    const handleStart = () => {
      setIsCounting(true);
    };

    const updateStopTimer = (status) => {
      setIsCounting(status);
      setCounter(0);
      setTimeLeft(2 * 60);
    };

    const handleUpdate = () => {
      updateStopTimer(true);
      if (counter !== 0) changeModeForUser(counter, false);
    };
    const handleStop = () => {
      updateStopTimer(false);
      changeModeForUser(counter, false);
    };

    return (
      <Component minutes={minutes} seconds={seconds} 
        handleStart={handleStart} handleUpdate={handleUpdate} 
        handleStop={handleStop} isCounting={isCounting} 
        onChangeMinutes={onChangeMinutes} 
        onChangeSeconds={onChangeSeconds} />
    );
  };

  return connect(mapStateToPropsForTimer, {setTradingMode})
  (WidgetTimerContainer);
};