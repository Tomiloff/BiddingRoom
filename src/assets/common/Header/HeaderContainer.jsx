import { connect } from "react-redux";
import Header from "./Header";


const mapStateToProps = (state) => {
  return {
    header: state.header
  };
};


export default connect(mapStateToProps, null)(Header);
