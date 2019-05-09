import React, { Component } from "react";
import {View, Text} from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/SignInStyle";

// create a component
class SignIn extends Component {
  static navigationOptions = {
    title: " ",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn</Text>
      </View>
    );
  }S
}

export default SignIn;
SignIn.propTypes = {
  signInUser: PropTypes.func,
  loading: PropTypes.bool,
  status: PropTypes.string,
  user: PropTypes.object
};