import classNames from "classnames";
import Timer from "../../components/room/widgets/Timer";
import styles from "../../pages/Room/Room.module.css";


const ParticipantСard = ({minutes, seconds, id, login, tradingMode, onChangeMinutes, onChangeSeconds}) => {
  return (
    <div id={id} className={classNames(styles.participant, !tradingMode ? styles.adaptation : "")}>
      <Timer minutes={minutes} seconds={seconds} tradingMode={tradingMode} onChangeSeconds={onChangeSeconds} onChangeMinutes={onChangeMinutes} />
      <h3 className={styles.parametersSubTitle}>{login}</h3>
      <ul className={classNames(login === "Testing timer" ? styles.hideTable : styles.participantTable)}>
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


