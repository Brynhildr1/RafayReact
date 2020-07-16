import React from "react";
import styled from "styled-components";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../screens/Homescreen";
import { render } from "react-dom";
import MyOrigin from "../screens/MyOrigin";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Homescreen"
      >
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="MyOrigins" component={MyOrigin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
