import styles from "./timer.module.css";


const Timer = ({minutes, seconds}) => {
  
  return(
    <div className={styles.timer}>
      <time>00:{minutes}:{seconds}</time>
    </div>
  )
};


export default Timer;