import React, { Component } from "react";
import { View, FlatList } from "react-native";
import PropTypes from "prop-types";
import styles from "../styles/DashboardStyles";
import ListItem from "../../coreComponents/ListItem";

// create a component
class Dashboard extends Component {
  static navigationOptions = {
    title: " ",
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
  loading: PropTypes.bool,
  status: PropTypes.string,
  user: PropTypes.object
};
