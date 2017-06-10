import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 10,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
});

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.headerText }</Text>
    </View>
  );
};

export default Header;
