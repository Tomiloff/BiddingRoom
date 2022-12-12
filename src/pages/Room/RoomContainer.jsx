import { withWidgetTimer } from "../../components/room/widgets/withWidgetTimer";
import Room from "./Room";


const RoomContainer = ({handleStart, handleUpdate, handleStop, minutes, seconds, isCounting}) => {

  return (
    <Room handleStart={handleStart} handleUpdate={handleUpdate} handleStop={handleStop} minutes={minutes} seconds={seconds} isCounting={isCounting} />
  );
};


export default withWidgetTimer(RoomContainer);
