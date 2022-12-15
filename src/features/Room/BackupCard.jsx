import classNames from "classnames";
import Timer from "../../components/room/widgets/Timer";
import styles from "../../pages/Room/Room.module.css";


const BackupCard = ({minutes, seconds, id, login, tradingMode, onChangeMinutes, onChangeSeconds}) => {
  return (
    <div id={id} className={classNames(styles.participant, !tradingMode ? styles.adaptation : "")}>
      <Timer minutes={minutes} seconds={seconds} tradingMode={tradingMode} onChangeSeconds={onChangeSeconds} onChangeMinutes={onChangeMinutes} />
      <h3 className={styles.parametersSubTitle}>{login}</h3>
      <ul className={styles.participantTable}>
        <li className={styles.termsStandard}>-</li>
        <li>-</li>
        <li>-</li>
        <li>-</li>
        <li className={styles.price}>-<br/>-<br/>-</li>
        <li>-</li>
      </ul>
    </div>
  );
};


export default BackupCard;


