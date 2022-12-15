import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setTradingMode } from "../../../stores/reducers/room-reducer";


const mapStateToPropsForTimer = (state) => {
  return {
    participants: state.room.participants
  }
};

export const withWidgetTimer = (Component) => {
  
  const WidgetTimerContainer = ({participants, setTradingMode}) => {
    const [timeLeft, setTimeLeft] = useState(1 * 60);
    const [isCounting, setIsCounting] = useState(false);
    const [actualMinutes, setActualMinutes] = useState("");
    const [actualSeconds, setActualSeconds] = useState("");
    const [counter, setCounter] = useState(0);
  
    const getPaadTime = (time) => time.toString().padStart(2, "0");
    const minutes = getPaadTime(Math.floor(timeLeft / 60));
    const seconds = getPaadTime(timeLeft - minutes * 60);


    const onChangeMinutes = (actualMinutes) => {
      setActualMinutes(actualMinutes);
    };

    const onChangeSeconds = (actualSeconds) => {
      setActualSeconds(actualSeconds);
    };
   

    useEffect(() => {
      const interval = setInterval(() => {
        isCounting && 
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 1 * 60));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, [isCounting]);

    useEffect(() => {
      if (actualMinutes === "00" && actualSeconds === "00" ) {
        setTradingMode(participants[counter].id, false);
        setCounter(c => c + 1);
      } else if (counter === participants.length)  {
        setCounter(0);
      }
    }, [actualSeconds]);

    useEffect(() => {
      if (counter < participants.length) {
        isCounting &&
      setTradingMode(participants[counter].id, true)
      }
    }, [isCounting, counter]);

  
    const handleStart = () => {
      setIsCounting(true);
    };

    const handleUpdate = () => {
      setIsCounting(true);
      setCounter(0);
      setTimeLeft(1 * 60);

      if (counter != 0) setTradingMode(participants[counter].id, false);
    };

    const handleStop = () => {
      setIsCounting(false);
      setTradingMode(participants[counter].id, false);
      setCounter(0);
      setTimeLeft(1 * 60);
    };


    return (
      <Component minutes={minutes} seconds={seconds} handleStart={handleStart} handleUpdate={handleUpdate} handleStop={handleStop} isCounting={isCounting} onChangeMinutes={onChangeMinutes} onChangeSeconds={onChangeSeconds} />
    );
  };

  
  return connect(mapStateToPropsForTimer, {setTradingMode})(WidgetTimerContainer);
};