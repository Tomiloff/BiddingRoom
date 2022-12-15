import styles from "./Room.module.css";
import WorkingArea from "../../features/Room/WorkingArea";


const Room = () => {

  return (
    <div className={styles.room}>
      <h2 className={styles.notification}>Уважаемые участники, во время Вашего хода Вы можете изменить параметры торгов, укаказзных в таблице:</h2>
      <WorkingArea />
    </div>
  );
};


export default Room;