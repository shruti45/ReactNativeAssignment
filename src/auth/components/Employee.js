import React, { Component } from "react";
import { View, FlatList, StatusBar, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/EmployeeStyles";
import ListItem from "../../coreComponents/ListItem";
import colors from "../../utils/Colors";
import { EMPLOYEE_LIST } from "../../utils/Constant";

// create a component
class Dashboard extends Component {
  static navigationOptions = {
    title: "",
    header: null
  };
  componentDidMount() {
    this.props.getEmployeeList();
  }
  renderListItem = item => {
    return <ListItem data={item} />;
  };

  render() {
    const { employee } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={colors.grey}
          hidden={false}
        />
        <View style={styles.listHeaderContainer}>
          <Text style={styles.listHeaderText}>{EMPLOYEE_LIST}</Text>
        </View>
        {employee && (
          <FlatList
            contentContainerStyle={styles.list}
            data={employee.data}
            keyExtractor={(item, index) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => this.renderListItem(item)}
          />
        )}
      </View>
    );
  }
}

export default Dashboard;
Dashboard.propTypes = {
  signInUser: PropTypes.func,
  status: PropTypes.string,
  user: PropTypes.object
};
