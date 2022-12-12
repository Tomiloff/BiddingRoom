import classNames from "classnames";
import Timer from "../../components/room/widgets/Timer";
import styles from "../../pages/Room/Room.module.css";


const ParticipantСard = ({minutes, seconds, isCounting}) => {
  return (
    <div className={classNames(styles.participant, !isCounting ? styles.adaptation : "")}>
      <Timer minutes={minutes} seconds={seconds} isCounting={isCounting} />
      <h3 className={styles.parametersSubTitle}>Участник №1</h3>
      <ul className={styles.participantTable}>
        <li className={styles.termsStandard}>-</li>
        <li>80</li>
        <li>24</li>
        <li>30%</li>
        <li className={styles.price}>3,700,000 руб<br/>-25,000 руб<br/>2,000 руб</li>
        <li>-</li>
      </ul>
    </div>
  );
};


export default ParticipantСard;


