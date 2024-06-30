import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreenCollege = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreenCollege}>
      <View style={styles.homeScreenCollegeChild} />
      <Pressable
        style={styles.signup}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={styles.signup1}>Signup</Text>
      </Pressable>
      <Image
        style={[styles.leonardoDiffusionXlGenerateIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/leonardo-diffusion-xl-generate-an-image-for-the-front-end-of-m-0-1.png")}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("LoginScreenCollege")}
      >
        <View style={[styles.buttonChild, styles.buttonPosition]} />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.button1}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <View style={[styles.buttonItem, styles.buttonPosition]} />
        <Text style={[styles.student, styles.loginTypo]}>Student</Text>
      </Pressable>
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/battery.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={[styles.signalsIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/signals.png")}
      />
      <Text style={styles.text}>9:20</Text>
      <Text style={styles.welcomeToThe}>{`Welcome To The College         
    Admission System!`}</Text>
      <Pressable
        style={styles.college}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.college1}>College</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    position: "absolute",
    width: "100%",
  },
  loginTypo: {
    left: "28.4%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  iconLayout: {
    width: "6.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeScreenCollegeChild: {
    height: "8.18%",
    width: "41.54%",
    top: "64.1%",
    right: "5.64%",
    bottom: "27.73%",
    left: "52.82%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorSteelblue,
    position: "absolute",
  },
  signup1: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
  },
  signup: {
    left: "62.05%",
    top: "66%",
    position: "absolute",
  },
  leonardoDiffusionXlGenerateIcon: {
    height: "60.07%",
    bottom: "38.98%",
    borderRadius: Border.br_23xl,
    left: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "0.95%",
    width: "100%",
  },
  buttonChild: {
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorSteelblue,
    top: "0%",
    height: "100%",
  },
  login: {
    top: "23.19%",
  },
  button: {
    top: 541,
    left: 21,
    width: 162,
    height: 69,
    position: "absolute",
  },
  buttonItem: {
    backgroundColor: Color.colorLightsteelblue,
    borderColor: Color.colorLightsteelblue,
  },
  student: {
    top: "23.27%",
    display: "none",
  },
  button1: {
    top: 63,
    left: 248,
    width: 125,
    height: 52,
    position: "absolute",
  },
  batteryIcon: {
    height: "1.48%",
    top: "2.37%",
    right: "4.87%",
    bottom: "96.15%",
    left: "88.72%",
  },
  wifiIcon: {
    height: "2.07%",
    top: "2.13%",
    right: "12.31%",
    bottom: "95.79%",
    left: "81.28%",
  },
  signalsIcon: {
    height: "2.37%",
    width: "5.92%",
    top: "1.9%",
    right: "20.23%",
    bottom: "95.73%",
    left: "73.85%",
  },
  text: {
    left: "8.72%",
    top: "0.95%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  welcomeToThe: {
    marginLeft: -174,
    bottom: 64,
    left: "50%",
    fontSize: FontSize.size_9xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    width: 423,
    height: 128,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    position: "absolute",
  },
  college1: {
    color: Color.colorSteelblue,
    width: 105,
    height: 33,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
  },
  college: {
    left: 258,
    top: 72,
    position: "absolute",
  },
  homeScreenCollege: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScreenCollege;
