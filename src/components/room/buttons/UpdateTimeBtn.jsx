import styles from "./buttons.module.css";
import timerIcon from "../../../assets/all-images/icons/timerForButton.svg"


const UpdateTimeBtn = ({handleUpdate}) => {
  return (
    <button onClick={handleUpdate} className={styles.btnUpdate}>
      <p>Обновить</p>
      <img src={timerIcon} alt="timerIcon" />
    </button>
  );
};


export default UpdateTimeBtn;