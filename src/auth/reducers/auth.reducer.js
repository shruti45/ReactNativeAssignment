import * as userActions from "../actions/auth.actions";
const user = (
  state = {
    user: null,
    loading: false,
    error: null,
    status: "",
   
  },
  action
) => {
  switch (action.type) {
  case userActions.SIGNIN_USER_REQUEST:
    return Object.assign({}, state, {
      loading: true,
      status: action.status
    });
  case userActions.SIGNIN_USER_SUCCESS:
    return Object.assign({}, state, {
      user: action.user,
      loading: false,
      isLoggedIn: true,
      status: action.status
    });

  case userActions.SIGNIN_USER_FAILURE:
    return Object.assign({}, state, {
      error: action.error,
      loading: false,
      isLoggedIn: false,
      status: action.status,
      user: state.user
    });
  default:
    return state;
  }
};
export default user;