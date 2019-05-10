/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./configStore";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SignInContainer from "./src/auth/containers/SignInContainer ";
import EmployeeContainer from "./src/auth/containers/EmployeeContainer";
const AssignmentStack = createStackNavigator({
  SignInContainer: {
    screen: SignInContainer
  },
  EmployeeContainer: {
    screen: EmployeeContainer
  }
});
const AppContainer = createAppContainer(AssignmentStack);
const store = configureStore();
export default class App extends Component {
  UNSAFE_componentWillMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
