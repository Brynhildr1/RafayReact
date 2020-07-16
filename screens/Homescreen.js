import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
  Button,
} from "react-native";
import styled from "styled-components";
import Card from "../Components/Card";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../Components/Logo";
import Course from "../Components/Course";
import Menu from "../Components/Menu";
import { connect } from "react-redux";
import Avatar from "../Components/Avatar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class Homescreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome Back</Title>
                <Name>{this.props.name}</Name>
              </TitleBar>
              <ScrollView
                style={{ flexDirection: "row", padding: 20, paddingLeft: 12 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              <Subtitle>My Journey</Subtitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("MyOrigins");
                    }}
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      caption={card.caption}
                      logo={card.logo}
                      subtitle={card.subtitle}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Subtitle>people around me</Subtitle>
              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homescreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const logos = [
  {
    image: require("../assets/rafay7.jpg"),
    text: "Bio",
  },
  {
    image: require("../assets/rafay4.jpg"),
    text: "Goals",
  },
  {
    image: require("../assets/rafay10.jpg"),
    text: "Acheivements",
  },
];

const cards = [
  {
    title: "",
    image: require("../assets/rafay.jpg"),
    subtitle: "1 of 8 sections",
    caption: "My Origins",
    logo: require("../assets/rafkhogaming.jpg"),
    screen: "MyOrigins",
  },
  {
    title: "",
    image: require("../assets/rafay5.jpg"),
    subtitle: "2 of 8 sections",
    caption: "My Beginnings",
    logo: require("../assets/rafkhogaming.jpg"),
  },
  {
    title: "",
    image: require("../assets/rafay9.jpg"),
    subtitle: "3 of 8 sections",
    caption: "My Early Growth",
    logo: require("../assets/rafkhogaming.jpg"),
  },
  {
    title: "",
    image: require("../assets/rafay13.jpg"),
    subtitle: "4 of 8 sections",
    caption: "My Later Development",
    logo: require("../assets/rafkhogaming.jpg"),
  },
  {
    title: "",
    image: require("../assets/rafay8.jpg"),
    subtitle: "5 of 8 sections",
    caption: "My Work Life",
    logo: require("../assets/rafkhogaming.jpg"),
  },
  {
    title: "",
    image: require("../assets/rafay14.jpg"),
    subtitle: "6 of 8 sections",
    caption: "My Relationships",
    logo: require("../assets/rafkhogaming.jpg"),
  },
];

const courses = [
  {
    title: "",
    subtitle: "",
    image: require("../assets/rafay6.jpg"),
    author: "4 Sections",
    avatar: require("../assets/rafay2.jpg"),
    caption: "Family",
  },
  {
    title: "",
    subtitle: "",
    image: require("../assets/rafay3.jpg"),
    author: "8 Sections",
    avatar: require("../assets/rafay2.jpg"),
    caption: "Friends",
  },
];
