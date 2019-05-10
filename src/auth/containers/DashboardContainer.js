import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";
import {
    getEmployeesList
} from "./../actions/dashboard.actions";

const mapStateToProps = state => {
  return {
    employees: state.dashboard.employees,
    loading: state.dashboard.loading,
    error: state.dashboard.error,
    status: state.dashboard.status,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployeesList: () => {
      dispatch(getEmployeesList());
    },
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
export default DashboardContainer;