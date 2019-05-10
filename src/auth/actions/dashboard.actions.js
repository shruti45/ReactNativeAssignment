import { SUCCESS } from "../../utils/Constant";
export const GET_EMPLOYEE_LIST_SUCCESS = "GET_EMPLOYEE_LIST_SUCCESS";
import { employeeList } from "../../utils/EmployeeData";

export function getEmployeeList() {
  return {
    type: GET_EMPLOYEE_LIST_SUCCESS,
    status: SUCCESS,
    employeeList
  };
}
