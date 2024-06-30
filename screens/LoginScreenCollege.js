import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginScreenCollege = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreenCollege}>
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wifi1.png")}
      />
      <Image
        style={[styles.signalsIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/signals1.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/battery1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>9:20</Text>
      <Image
        style={styles.login1Icon}
        contentFit="cover"
        source={require("../assets/login-1.png")}
      />
      <View style={styles.information}>
        <View style={styles.informationChild} />
        <View style={[styles.informationItem, styles.buttonChildPosition]} />
      </View>
      <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={[styles.dontHaveAnAccountSignUp, styles.loginTypo]}>
          Don’t have an account? Sign up
        </Text>
      </Pressable>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("HomePageCollege")}
      >
        <View style={[styles.buttonChild, styles.buttonChildPosition]} />
        <Text style={[styles.login1, styles.textTypo]}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  buttonChildPosition: {
    bottom: "0%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  loginTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  emailTypo: {
    color: Color.colorGray,
    fontSize: FontSize.size_lgi,
    left: 62,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  wifiIcon: {
    height: "2.07%",
    top: "2.13%",
    right: "12.31%",
    bottom: "95.79%",
    left: "81.28%",
    width: "6.41%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  signalsIcon: {
    height: "2.37%",
    width: "5.92%",
    top: "1.9%",
    right: "20.23%",
    bottom: "95.73%",
    left: "73.85%",
  },
  batteryIcon: {
    height: "1.48%",
    top: "2.37%",
    right: "4.87%",
    bottom: "96.15%",
    left: "88.72%",
    width: "6.41%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    top: "0.95%",
    left: "8.72%",
    color: Color.colorBlack,
  },
  login1Icon: {
    top: 170,
    left: 95,
    width: 189,
    height: 202,
    position: "absolute",
  },
  informationChild: {
    bottom: "59.62%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "40.38%",
    position: "absolute",
    width: "100%",
  },
  informationItem: {
    top: "59.62%",
    bottom: "0%",
    height: "40.38%",
  },
  information: {
    height: "12.32%",
    width: "75.64%",
    top: "51.78%",
    right: "12.05%",
    bottom: "35.9%",
    left: "12.31%",
    position: "absolute",
  },
  login: {
    top: "46.92%",
    left: "40%",
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl_7,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  dontHaveAnAccountSignUp: {
    marginTop: 247,
    fontSize: FontSize.size_xl,
    textDecoration: "underline",
    color: Color.colorDarkblue,
  },
  dontHaveAnContainer: {
    left: "11.79%",
    top: "50%",
    position: "absolute",
  },
  email: {
    top: 446,
  },
  password: {
    top: 508,
  },
  buttonChild: {
    height: "100%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorSteelblue,
    top: "0%",
    bottom: "0%",
  },
  login1: {
    top: "23.19%",
    left: "28.4%",
    color: Color.colorWhite,
  },
  button: {
    marginLeft: -81,
    top: 576,
    left: "50%",
    width: 162,
    height: 69,
    position: "absolute",
  },
  loginScreenCollege: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginScreenCollege;
