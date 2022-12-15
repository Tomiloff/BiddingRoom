import styles from "./timer.module.css";
import timerIcon from "../../../assets/all-images/icons/timerForWidget.svg";
import classNames from "classnames";
import { useEffect } from "react";


const Timer = ({minutes, seconds, tradingMode, onChangeMinutes, onChangeSeconds}) => {

  useEffect(() => {
    onChangeSeconds(seconds);
    onChangeMinutes(minutes);
  });
  
  return(
    <div className={classNames(styles.timer, tradingMode ? styles.show : styles.hide)}>
      <time>00:{minutes}:{seconds}</time>
      <img src={timerIcon} alt="timerIcon" />
    </div>
  )
};


export default Timer;