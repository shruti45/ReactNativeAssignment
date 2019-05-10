import * as dashboardActions from "../actions/dashboard.actions";
const dashboard = (
  state = {
    employee: null,
    status: ""
  },
  action
) => {
  switch (action.type) {
    case dashboardActions.GET_EMPLOYEE_LIST_SUCCESS: {
      return Object.assign({}, state, {
        status: action.status,
        employee: action.employeeList
      });
    }
    default:
      return state;
  }
};
export default dashboard;
