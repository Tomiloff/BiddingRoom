import styles from "./buttons.module.css";
import startIcon from "../../../assets/all-images/icons/startBidding.svg"


const StartTimeBtn = ({handleStart}) => {
  return (
    <button onClick={handleStart} className={styles.btnStart}>
      <p>Начать</p>
      <img src={startIcon} alt="timerIcon" />
    </button>
  );
};


export default StartTimeBtn;