import { StyleSheet } from "react-native";
import colors from "../../utils/Colors";

const SignInStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 30
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center"
  },
  inputContainer: {
    marginTop: 10
  },
  buttonContainer: {
    height: 50,
    width: "100%",
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLabel: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center"
  }
});

export default SignInStyle;
