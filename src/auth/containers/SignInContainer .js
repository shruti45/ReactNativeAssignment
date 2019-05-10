import { connect } from "react-redux";
import SignIn from "../components/SignIn";
import { getUser } from "./../actions/auth.actions";

const mapStateToProps = state => {
  console.log("state.user.user", state.user.user);
  return {
    user: state.user.user,
    status: state.user.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(getUser());
    }
  };
};

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
export default SignInContainer;
