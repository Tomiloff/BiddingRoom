import { connect } from "react-redux";
import { compose } from "redux";
import { withWidgetTimer } from "../../components/room/widgets/withWidgetTimer";
import Room from "./Room";


const RoomContainer = ({handleStart, handleUpdate, handleStop, minutes, seconds, isCounting, room, onChangeMinutes, onChangeSeconds}) => {

  return (
    <Room handleStart={handleStart} handleUpdate={handleUpdate} handleStop={handleStop} minutes={minutes} seconds={seconds} isCounting={isCounting} room={room} onChangeMinutes={onChangeMinutes} onChangeSeconds={onChangeSeconds} />
  );
};


const mapStateToProps = (state) => {
  return {
    room: state.room
  }
};


export default compose( withWidgetTimer, connect(mapStateToProps, null)) (RoomContainer);

