import styles from "./buttons.module.css";
import exitIcon from "../../../assets/all-images/icons/exit.svg";


const ExitBtn = () => {
  return (
    <button className={styles.btnExit}>
      <p>Выйти</p>
      <img src={exitIcon} alt="exitIcon" />
    </button>
  );
};


export default ExitBtn;