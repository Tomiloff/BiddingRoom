import CloseAuctionBtn from "../../components/room/buttons/CloseAuctionBtn";
import StartTimeBtn from "../../components/room/buttons/StartTimeBtn";
import UpdateTimeBtn from "../../components/room/buttons/UpdateTimeBtn";
import ParametersTable from "../../features/Room/ParametersTable";
import ParticipantСard from "../../features/Room/ParticipantСard";
import styles from "./Room.module.css";


const Room = ({handleStart, handleUpdate, handleStop, minutes, seconds, isCounting, room, onChangeSeconds, onChangeMinutes}) => {

  return (
    <div className={styles.room}>
      <h2 className={styles.notification}>Уважаемые участники, во время Вашего хода Вы можете изменить параметры торгов, укаказзных в таблице:</h2>
      <div>
        <div className={styles.tradingWorkspace}>
          <ParametersTable />
          <div className={styles.competitionArea}>
            {room.participants.map(({id, login, tradingMode}) => {
              return(
                <ParticipantСard key={id} id={id} login={login} minutes={minutes} seconds={seconds} tradingMode={tradingMode} onChangeMinutes={onChangeMinutes} onChangeSeconds={onChangeSeconds} />
              )
           })}
          </div>
        </div>
        <div className={styles.сontrolPanel}>
          {isCounting ? <UpdateTimeBtn handleUpdate={handleUpdate} /> : 
          <StartTimeBtn handleStart={handleStart} />}
          <CloseAuctionBtn handleStop={handleStop} />
        </div>
      </div>
    </div>
  );
};


export default Room;