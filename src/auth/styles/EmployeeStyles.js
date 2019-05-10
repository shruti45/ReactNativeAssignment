import { StyleSheet } from "react-native";
import colors from "../../utils/Colors";

const EmployeeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  list: {
    paddingHorizontal: 30
  },
  listHeaderContainer: {
    height: 50,
    justifyContent: "center",
    backgroundColor: colors.grey
  },
  listHeaderText: {
    fontSize: 16,
    color: colors.balck,
    fontWeight: "bold",
    paddingHorizontal: 30
  }
});

export default EmployeeStyles;
