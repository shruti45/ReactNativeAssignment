import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import {
  signInUser,
} from "./../actions/auth.actions";

const mapStateToProps = state => {
  return {
    user: state.user.user,
    loading: state.user.loading,
    error: state.user.error,
    status: state.user.status,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signInUser: async userObj => {
      dispatch(signInUser(userObj));
    },
  };
};

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
export default SignInContainer;