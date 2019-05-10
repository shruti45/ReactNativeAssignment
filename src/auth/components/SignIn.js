import React, { Component } from "react";
import { StatusBar, View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Toast from "react-native-simple-toast";
import { StackActions, NavigationActions } from "react-navigation";
import styles from "../styles/SignInStyle";
import Input from "../../coreComponents/Input";
import Button from "../../coreComponents/Button";
import colors from "../../utils/Colors";
import emailIcon from "../../images/emailGray.png";
import passwordIcon from "../../images/passwordGray.png";
import {
  DOES_NOT_EXIST,
  IN_VALID_EMAIL,
  IN_VALID_PASSWORD,
  ENTER_EMAIL_ID,
  ENTER_PASSWORD
} from "../../utils/Constant";
import { isValidEmail, isValidPassword } from "../../utils/Validation";

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "EmployeeContainer" })]
});

// create a component
class SignIn extends Component {
  static navigationOptions = {
    title: " ",
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      password: ""
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  handleSignIn() {
    if (!this.state.emailId.length) {
      Toast.show(ENTER_EMAIL_ID);
      return;
    } else if (!isValidEmail(this.state.emailId)) {
      Toast.show(IN_VALID_EMAIL);
      return;
    } else if (!this.state.password.length) {
      Toast.show(ENTER_PASSWORD);
      return;
    }
    if (!isValidPassword(this.state.password)) {
      Toast.show(IN_VALID_PASSWORD);
      return;
    } else {
      this.validateUser();
    }
  }

  validateUser() {
    const { user } = this.props;

    const { emailId, password } = this.state;
    if (emailId === user.username && password === user.password) {
      this.props.navigation.dispatch(resetAction);
    } else {
      Toast.show(DOES_NOT_EXIST);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={colors.white}
          hidden={false}
        />
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps={"always"}
        >
          <View style={styles.subContainer}>
            <Input
              srcLeft={emailIcon}
              placeholder="Username"
              keyboardType="email-address"
              returnKeyType={"done"}
              autoCapitalize={"none"}
              autoCorrect={false}
              placeholderTextColor={colors.placeholderTextColor}
              onChangeText={val => this.setState({ emailId: val })}
            />
            <View style={styles.inputContainer}>
              <Input
                srcLeft={passwordIcon}
                placeholder="Password"
                returnKeyType={"done"}
                autoCapitalize={"none"}
                autoCorrect={false}
                maxLength={20}
                placeholderTextColor={colors.placeholderTextColor}
                onChangeText={val => this.setState({ password: val })}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Button
                loading={this.props.loading}
                title={"Login"}
                container={styles.buttonContainer}
                textStyle={styles.buttonLabel}
                onPress={() => this.handleSignIn()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SignIn;
SignIn.propTypes = {
  signInUser: PropTypes.func,
  loading: PropTypes.bool,
  status: PropTypes.string,
  user: PropTypes.object
};
