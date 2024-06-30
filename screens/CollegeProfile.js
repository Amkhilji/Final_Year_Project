import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CollegeProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.collegeProfile}>
      <Image
        style={styles.collegeProfileChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <View style={styles.timesignalwifi}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.signalsIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/signals.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>9:20</Text>
      </View>
      <Image
        style={[styles.collegeProfileItem, styles.collegePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.collegeName, styles.collegePosition]}>
        College Name
      </Text>
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      <View style={[styles.collegeProfileInner, styles.collegeLayout]} />
      <Text style={[styles.contact, styles.nameTypo]}>Contact:</Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.merit, styles.meritTypo]}>Merit:</Text>
      <Text style={[styles.text1, styles.nameTypo]}>%</Text>
      <View
        style={[styles.collegeProfileChild1, styles.rectangleViewPosition]}
      />
      <Text style={[styles.email, styles.meritTypo]}>Email:</Text>
      <View style={[styles.collegeProfileChild2, styles.collegeLayout]} />
      <Text style={[styles.address, styles.addressTypo]}>Address:</Text>
      <View style={[styles.collegeProfileChild3, styles.collegeChildLayout]} />
      <Text style={[styles.headOfInsttitute, styles.addressTypo]}>
        Head of institute
      </Text>
      <View style={[styles.collegeProfileChild4, styles.collegeChildLayout]} />
      <View style={styles.collegeProfileChild5} />
      <Pressable
        style={[styles.logout, styles.collegePosition]}
        onPress={() => navigation.navigate("LoginScreenCollege")}
      >
        <Text style={[styles.logout1, styles.textTypo]}>LogOut</Text>
      </Pressable>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Image
        style={styles.amk2Icon}
        contentFit="cover"
        source={require("../assets/amk-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
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
  collegePosition: {
    left: "50%",
    position: "absolute",
  },
  nameTypo: {
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  collegeLayout: {
    width: 293,
    marginLeft: -109,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  rectangleViewPosition: {
    marginLeft: -108,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  meritTypo: {
    left: 19,
    height: 28,
    width: 84,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  addressTypo: {
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
  collegeChildLayout: {
    width: 286,
    marginLeft: -108,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  collegeProfileChild: {
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
  collegeProfileItem: {
    marginLeft: -86,
    width: 173,
    height: 157,
    top: 45,
  },
  collegeName: {
    marginLeft: -89,
    top: 211,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
  },
  name: {
    top: 334,
    left: 15,
    width: 84,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
  },
  collegeProfileInner: {
    top: 324,
    height: 38,
  },
  contact: {
    top: 389,
    left: 11,
    width: 84,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
  },
  rectangleView: {
    top: 384,
    width: 211,
    height: 38,
  },
  merit: {
    top: 509,
  },
  text1: {
    left: 186,
    width: 47,
    top: 509,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
  },
  collegeProfileChild1: {
    top: 504,
    width: 91,
    height: 33,
  },
  email: {
    top: 449,
  },
  collegeProfileChild2: {
    top: 444,
    height: 38,
  },
  address: {
    top: 564,
  },
  collegeProfileChild3: {
    top: 559,
  },
  headOfInsttitute: {
    top: 629,
  },
  collegeProfileChild4: {
    top: 636,
  },
  collegeProfileChild5: {
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
    left: 109,
    borderRadius: Border.br_139xl_5,
    width: 175,
    height: 159,
    top: 45,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.96%",
    width: "4.82%",
    top: "30.45%",
    right: "49.54%",
    bottom: "66.59%",
    left: "45.64%",
  },
  vectorIcon1: {
    height: "3.2%",
    width: "8.97%",
    top: "17.89%",
    right: "26.15%",
    bottom: "78.91%",
    left: "64.87%",
  },
  collegeProfile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default CollegeProfile;
