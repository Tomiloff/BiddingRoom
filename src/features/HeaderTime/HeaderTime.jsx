import { useState } from "react";
import styles from "./HeaderTime.module.css";


const HeaderTime = ({currentDate, currentTime}) => {

  const [date, setCurrentDate] = useState("");
  const [time, setTime] = useState("");
  
  setInterval( () => {
    setCurrentDate(currentDate);
    setTime(currentTime);
  });

  return (
    <time className={styles.time}>{`(${date} ${time})`}</time>
  );
};


export default HeaderTime;





