import { withWidgetTimer } from "../../components/room/widgets/withWidgetTimer";
import Room from "./Room";


const RoomContainer = ({handleUpdate, handleStop, minutes, seconds}) => {

  return (
    <Room handleUpdate={handleUpdate} handleStop={handleStop} minutes={minutes} seconds={seconds} />
  );
};


export default withWidgetTimer(RoomContainer);
