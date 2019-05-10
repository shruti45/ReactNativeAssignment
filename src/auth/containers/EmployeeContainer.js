import { connect } from "react-redux";
import Employee from "../components/Employee";
import { getEmployeeList } from "./../actions/dashboard.actions";

const mapStateToProps = state => {
  return {
    employee: state.dashboard.employee,
    status: state.dashboard.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployeeList: () => {
      dispatch(getEmployeeList());
    }
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee);
export default DashboardContainer;
