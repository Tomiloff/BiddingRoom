import { useState } from "react";
import styles from "./HeaderTime.module.css";


const HeaderTime = () => {

  const [currentDate, setCurrentDate] = useState("");
  const [time, setTime] = useState("");
  
  setInterval( () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    const currentDate = `${day}.${month}.${year}`;
    setCurrentDate(currentDate);

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if(hours < 10) hours = `0${hours}`;
    if(minutes < 10) minutes = `0${minutes}`;

    const clock = `${hours}:${minutes}`;
    setTime(clock);
  });

  return (
    <time className={styles.time}>{`(${currentDate} ${time})`}</time>
  );
};


export default HeaderTime;





