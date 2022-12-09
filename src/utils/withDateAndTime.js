import { useState } from "react";


export const withDateAndTime = (Component) => {
  
  const DateAndTimeComponent = () => {
    
    const [date, setCurrentDate] = useState("");
    const [time, setTime] = useState("");
    
    setInterval( () => {
      let date = new Date();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      if (day < 10) day = '0' + day;
      if (month < 10) month = '0' + month;

      let hours = date.getHours();
      let minutes = date.getMinutes();

      if(hours < 10) hours = `0${hours}`;
      if(minutes < 10) minutes = `0${minutes}`;

      const currentDate = `${day}.${month}.${year}`;
      const currentTime = `${hours}:${minutes}`;

      setCurrentDate(currentDate);
      setTime(currentTime);
    });

    return (
      <Component currentDate={date} currentTime={time}/>
    );
  };

  return DateAndTimeComponent;
};