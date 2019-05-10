import { StyleSheet } from "react-native";
import colors from "../utils/Colors";

const ListItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
    marginHorizontal: 6,
    marginVertical: 3,
    borderRadius: 3
  },
  text: {
    fontSize: 14,
    color: colors.balck
  }
});

export default ListItemStyles;
