import CloseAuctionBtn from "../../components/room/buttons/CloseAuctionBtn";
import ExitBtn from "../../components/room/buttons/ExitBtn";
import UpdateTimeBtn from "../../components/room/buttons/UpdateTimeBtn";
import ParametersTable from "../../features/Room/ParametersTable";
import ParticipantСard from "../../features/Room/ParticipantСard";
import styles from "./Room.module.css";


const Room = ({handleUpdate, handleStop, minutes, seconds}) => {
  return (
    <div className={styles.room}>
      <h2 className={styles.notification}>Уважаемые участники, во время Вашего хода Вы можете изменить параметры торгов, укаказзных в таблице:</h2>
      <div>
        <div className={styles.tradingWorkspace}>
          <ParametersTable />
          <div className={styles.competitionArea}>
            <ParticipantСard minutes={minutes} seconds={seconds} />
          </div>
        </div>

        <div className={styles.сontrolPanel}>
          <UpdateTimeBtn handleUpdate={handleUpdate} />
          <CloseAuctionBtn handleStop={handleStop} />
          <ExitBtn />
        </div>

      </div>
    </div>
  );
};


export default Room;