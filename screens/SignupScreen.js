import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signupScreen}>
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        source={require("../assets/wifi1.png")}
      />
      <Image
        style={[styles.signalsIcon, styles.iconLayout]}
        source={require("../assets/signals1.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        source={require("../assets/battery1.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>9:20</Text>
      <Image
        style={styles.login1Icon}
        source={require("../assets/login-1.png")}
      />
      <View style={styles.information}>
        <View style={[styles.informationChild, styles.informationBorder]} />
        <View style={[styles.informationItem, styles.informationBorder]} />
      </View>
      <Text style={[styles.signup, styles.signupTypo]}>Signup</Text>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={[styles.alreadyHaveAnAccountLogin, styles.signupTypo]}>
          Already have an account? Login
        </Text>
      </Pressable>
      <Text style={[styles.name, styles.nameTypo]}>{`Name `}</Text>
      <Text style={[styles.email, styles.nameTypo]}>Email</Text>
      <Text style={[styles.password, styles.confirmTypo]}>Password</Text>
      <View style={[styles.signupScreenChild, styles.signupLayout]} />
      <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
      <View style={[styles.signupScreenItem, styles.signupLayout]} />
      <View style={[styles.signupScreenInner, styles.signupPosition]} />
      <Pressable
        style={[styles.signup1, styles.signupPosition]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.signup2, styles.textTypo]}>Signup</Text>
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
    // Assuming FontFamily, FontSize, Color, and Border are defined elsewhere
    // Replace with actual values or imports
  },
  informationBorder: {
    borderWidth: 1,
    // Assuming Color is defined elsewhere
    borderColor: "black",
    borderStyle: "solid",
  },
  signupTypo: {
    // Assuming FontFamily, FontSize, and Color are defined elsewhere
    fontFamily: "Inter-Regular",
    textAlign: "left",
  },
  nameTypo: {
    color: "gray",
    // Assuming FontSize and FontFamily are defined elsewhere
    fontSize: 16,
    left: 62,
    // Assuming Position is absolute
    fontFamily: "Inter-Regular",
    textAlign: "left",
    position: "absolute",
  },
  confirmTypo: {
    left: 61,
    color: "gray",
    // Assuming FontSize and FontFamily are defined elsewhere
    fontSize: 16,
    fontFamily: "Inter-Regular",
    textAlign: "left",
    position: "absolute",
  },
  signupLayout: {
    height: 38,
    width: 295,
    marginLeft: -146,
    left: "50%",
    borderWidth: 1,
    // Assuming Color is defined elsewhere
    borderColor: "black",
    borderStyle: "solid",
    position: "absolute",
  },
  signupPosition: {
    left: "50%",
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
    // Assuming Color is defined elsewhere
    color: "black",
    position: "absolute",
  },
  login1Icon: {
    top: 170,
    left: 95,
    width: 189,
    height: 202,
    position: "absolute",
  },
  informationChild: {
    top: "0%",
    bottom: "59.62%",
    left: "0%",
    right: "0%",
    height: "40.38%",
    // Assuming Color is defined elsewhere
    borderColor: "black",
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
  },
  informationItem: {
    top: "59.62%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "40.38%",
    // Assuming Color is defined elsewhere
    borderColor: "black",
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
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
  signup: {
    top: "46.92%",
    left: "40%",
    // Assuming Color is defined elsewhere
    color: "black",
    position: "absolute",
    // Assuming FontSize and FontFamily are defined elsewhere
    fontSize: 28,
    fontFamily: "Inter-Regular",
  },
  alreadyHaveAnAccountLogin: {
    marginTop: 362,
    // Assuming FontSize is defined elsewhere
    fontSize: 18,
    textDecoration: "underline",
    // Assuming Color is defined elsewhere
    color: "blue",
  },
  alreadyHaveAnContainer: {
    left: "11.79%",
    top: "50%",
    position: "absolute",
  },
  name: {
    top: 446,
  },
  email: {
    top: 508,
  },
  password: {
    top: 566,
  },
  signupScreenChild: {
    top: 559,
  },
  confirm: {
    top: 622,
  },
  signupScreenItem: {
    top: 615,
  },
  signupScreenInner: {
    height: "8.18%",
    marginLeft: -79,
    top: "81.87%",
    bottom: "9.95%",
    // Assuming Border is defined elsewhere
    borderRadius: 11,
    // Assuming Color is defined elsewhere
    backgroundColor: "steelblue",
    width: 162,
    borderWidth: 1,
    // Assuming Color is defined elsewhere
    borderColor: "black",
    borderStyle: "solid",
  },
  signup2: {
    marginLeft: -43,
    // Assuming Color is defined elsewhere
    color: "white",
  },
  signup1: {
    top: "83.77%",
  },
  signupScreen: {
    // Assuming Color is defined elsewhere
    backgroundColor: "white",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignupScreen;
