import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  View,
  Text,
  Button,
} from "react-native";
import styled from "styled-components";
import { connect } from "react-redux";

const MyOrigin = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Origins</Text>
    <Button
      title="Back to Home"
      onPress={() => {
        navigation.navigate("Homescreen");
      }}
    />
  </View>
);

export default MyOrigin;
