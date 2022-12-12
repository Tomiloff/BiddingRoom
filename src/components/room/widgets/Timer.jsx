import styles from "./timer.module.css";
import timerIcon from "../../../assets/all-images/icons/timerForWidget.svg";
import classNames from "classnames";


const Timer = ({minutes, seconds, isCounting}) => {
  
  return(
    <div className={classNames(styles.timer, isCounting ? styles.show : styles.hide)}>
      <time>00:{minutes}:{seconds}</time>
      <img src={timerIcon} alt="timerIcon" />
    </div>
  )
};


export default Timer;