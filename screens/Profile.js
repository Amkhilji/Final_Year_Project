import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.timesignalwifi}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.signalsIcon, styles.iconLayout]}
          source={require("../assets/signals.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          source={require("../assets/battery.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>9:20</Text>
      </View>
      <Image
        style={[styles.profileItem, styles.logoutPosition]}
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.abdulMusawirKhan, styles.logoutPosition]}>
        ABDUL MUSAWIR KHAN
      </Text>
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      <View style={[styles.profileInner, styles.profileInnerLayout]} />
      <Text style={[styles.fname, styles.nameTypo]}>F/Name:</Text>
      <View style={[styles.rectangleView, styles.profileInnerLayout]} />
      <Text style={[styles.cnic, styles.cnicTypo]}>CNIC:</Text>
      <View style={[styles.profileChild1, styles.profileChildPosition1]} />
      <Text style={[styles.nation, styles.nationTypo]}>Nation:</Text>
      <View style={[styles.profileChild2, styles.profileChildPosition]} />
      <Text style={[styles.religion, styles.cnicTypo]}>Religion:</Text>
      <View style={[styles.profileChild3, styles.profileChildPosition1]} />
      <Text style={[styles.gender, styles.cnicTypo]}>Gender:</Text>
      <Text style={[styles.contact, styles.nationTypo]}>Contact:</Text>
      <View style={[styles.profileChild4, styles.profileChildPosition]} />
      <Text style={[styles.email, styles.cnicTypo]}>Email:</Text>
      <View style={[styles.profileChild5, styles.profileChildPosition1]} />
      <View style={[styles.profileChild6, styles.profileChildPosition1]} />
      <Text style={styles.studentId}>Student ID:</Text>
      <View style={styles.profileChild7} />
      <Pressable
        style={[styles.logout, styles.logoutPosition]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={[styles.logout1, styles.textTypo]}>LogOut</Text>
      </Pressable>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Image
        style={styles.amk2Icon}
        source={require("../assets/amk-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        source={require("../assets/vector.png")}
      />
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
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  logoutPosition: {
    left: "50%",
    position: "absolute",
  },
  nameTypo: {
    height: 28,
    width: 84,
    color: Color.colorBlack,
    left: 15,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  profileInnerLayout: {
    height: 38,
    marginLeft: -109,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  cnicTypo: {
    left: 12,
    height: 28,
    width: 84,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  profileChildPosition1: {
    marginLeft: -112,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  nationTypo: {
    left: 13,
    height: 28,
    width: 84,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  profileChildPosition: {
    marginLeft: -111,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  profileChild: {
    top: -94,
    left: -42,
    width: 468,
    height: 387,
    position: "absolute",
  },
  wifiIcon: {
    height: "47.3%",
    top: "27.03%",
    right: "8.61%",
    bottom: "25.68%",
    left: "83.98%",
    width: "7.42%",
    maxWidth: "100%",
  },
  signalsIcon: {
    height: "54.05%",
    width: "6.85%",
    top: "21.62%",
    right: "17.77%",
    bottom: "24.32%",
    left: "75.37%",
  },
  batteryIcon: {
    height: "33.78%",
    top: "32.43%",
    right: "0%",
    bottom: "33.78%",
    left: "92.58%",
    width: "7.42%",
    maxWidth: "100%",
  },
  text: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_5xl_7,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  timesignalwifi: {
    top: 8,
    left: 34,
    width: 337,
    height: 37,
    position: "absolute",
  },
  profileItem: {
    marginLeft: -86,
    top: 45,
    width: 173,
    height: 157,
  },
  abdulMusawirKhan: {
    marginLeft: -144,
    top: 211,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
  },
  name: {
    top: 334,
  },
  profileInner: {
    top: 324,
  },
  fname: {
    top: 390,
  },
  rectangleView: {
    top: 380,
  },
  cnic: {
    top: 446,
  },
  profileChild1: {
    top: 436,
    width: 212,
  },
  nation: {
    top: 670,
  },
  profileChild2: {
    top: 660,
    width: 212,
  },
  religion: {
    top: 726,
  },
  profileChild3: {
    top: 716,
    width: 212,
  },
  gender: {
    top: 502,
  },
  contact: {
    top: 558,
  },
  profileChild4: {
    top: 548,
    width: 211,
  },
  email: {
    top: 614,
  },
  profileChild5: {
    top: 604,
    width: 293,
    marginLeft: -112,
  },
  profileChild6: {
    top: 492,
    width: 126,
  },
  studentId: {
    marginLeft: -42,
    top: 248,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    left: "50%",
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  profileChild7: {
    height: "6.87%",
    marginLeft: -68,
    top: "91.47%",
    bottom: "1.66%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorSteelblue,
    width: 136,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  logout1: {
    height: "3.79%",
    marginLeft: -38,
    fontSize: FontSize.size_xl,
    width: 76,
  },
  logout: {
    top: "93.01%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    left: 0,
    top: 52,
    width: 71,
    height: 47,
    position: "absolute",
  },
  amk2Icon: {
    top: 43,
    left: 109,
    borderRadius: Border.br_139xl_5,
    width: 175,
    height: 159,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.2%",
    width: "8.97%",
    top: "18.25%",
    right: "26.67%",
    bottom: "78.55%",
    left: "64.36%",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
