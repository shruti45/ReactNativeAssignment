import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./ListItemStyles";
import PropTypes from "prop-types";
const ListItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {props.data.name}</Text>
      <Text style={styles.text}>Gender: {props.data.gender}</Text>
      <Text style={styles.text}>Age: {props.data.age}</Text>
      <Text style={styles.text}>Email: {props.data.email}</Text>
      <Text style={styles.text}>Phone No:{props.data.phoneNo}</Text>
    </View>
  );
};
export default ListItem;

ListItem.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.string,
  email: PropTypes.string,
  phoneNo: PropTypes.string
};
ListItem.defaultProps = {};
