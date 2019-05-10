import { SUCCESS, REQUESTING, ERROR } from "../../utils/Constant";

//Constants Declaration;
export const GET_USER_REQUEST = "GET_USER_REQUEST";

const user = {
  username: "prashant@gmail.com",
  password: "prashant123"
};

export function getUser() {
  return {
    type: GET_USER_REQUEST,
    status: SUCCESS,
    user
  };
}
