import { connect } from "react-redux";
import { compose } from "redux";
import { withDateAndTime } from "../../../utils/withDateAndTime";
import Header from "./Header";


const mapStateToProps = (state) => {
  return {
    header: state.header
  };
};


export default compose(withDateAndTime, connect(mapStateToProps, null))(Header);
