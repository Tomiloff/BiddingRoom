import { connect } from "react-redux";
import { compose } from "redux";
import CloseAuctionBtn from "../../components/room/buttons/CloseAuctionBtn";
import StartTimeBtn from "../../components/room/buttons/StartTimeBtn";
import UpdateTimeBtn from "../../components/room/buttons/UpdateTimeBtn";
import { withWidgetTimer } from "../../components/room/widgets/withWidgetTimer";
import ParametersTable from "./ParametersTable";
import ParticipantСard from "./ParticipantСard";
import styles from "../../pages/Room/Room.module.css";


const WorkingArea = ({handleStart, handleUpdate, handleStop, minutes, 
  seconds, isCounting, room, onChangeSeconds, onChangeMinutes}) => {
  return (
    <div>
      <div className={styles.tradingWorkspace}>
        <ParametersTable />
          <div className={styles.competitionArea}>
            {room.participants.map(({id, login, tradingMode}) => {
              return(
                <ParticipantСard key={id} id={id} login={login} 
                  minutes={minutes} seconds={seconds} 
                  tradingMode={tradingMode} onChangeMinutes={onChangeMinutes} 
                  onChangeSeconds={onChangeSeconds} />
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
  );
};


const mapStateToProps = (state) => {
  return {
    room: state.room
  }
};


export default compose( withWidgetTimer, connect(mapStateToProps, null)) 
(WorkingArea);