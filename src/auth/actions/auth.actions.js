import {
  SUCCESS,
  REQUESTING,
  ERROR
} from "../../utils/Constant";

//Constants Declaration;
export const SIGNIN_USER_REQUEST = "SIGNIN_USER_REQUEST";
export const SIGNIN_USER_SUCCESS = "SIGNIN_USER_SUCCESS";
export const SIGNIN_USER_FAILURE = "SIGNIN_USER_FAILURE";



//Actions for Login
export function signInUserRequest() {
  return {
    type: SIGNIN_USER_REQUEST,
    status: REQUESTING
  };
}

export function sigInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    status: SUCCESS,
    user
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    status: ERROR,
    error
  };
}

// Action creators function for Login
// Parameters emailId, password
export function signInUser(userObj) {
  return async (dispatch, getState, api) => {
    dispatch(signInUserRequest());
    try {
      const resultJson = {username:"prashant@gmail.com",passwrod:"prashant123"};
    
      dispatch(sigInUserSuccess(resultJson));

    
    } catch (e) {
      dispatch(signInUserFailure(e));
    }
  };
}












