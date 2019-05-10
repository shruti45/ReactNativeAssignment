import * as userActions from "../actions/auth.actions";
const user = (
  state = {
    user: null,
    status: ""
  },
  action
) => {
  switch (action.type) {
    case userActions.GET_USER_REQUEST:
      return Object.assign({}, state, {
        user: action.user,
        status: action.status
      });

    default:
      return state;
  }
};
export default user;
