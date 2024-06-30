import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PersonalInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalInfo}>
      <Image
        style={styles.personalInfoChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={[styles.timesignalwifi, styles.formPosition]}>
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
        <Text style={[styles.text, styles.textTypo2]}>9:20</Text>
      </View>
      <Image
        style={[styles.personalInfoItem, styles.nextPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.applicationForm, styles.nextPosition]}>
        Application Form
      </Text>
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      <View style={[styles.personalInfoInner, styles.personalChildBorder]} />
      <Text style={[styles.fname, styles.fnamePosition]}>F/Name:</Text>
      <View style={[styles.rectangleView, styles.fnamePosition]} />
      <Text style={[styles.cnic, styles.dobTypo]}>CNIC:</Text>
      <View style={[styles.personalInfoChild1, styles.cnicPosition]} />
      <Text style={[styles.nation, styles.nameTypo]}>Nation:</Text>
      <View style={[styles.personalInfoChild2, styles.personalChildPosition]} />
      <Text style={[styles.address, styles.emailTypo]}>Address:</Text>
      <View style={[styles.personalInfoChild3, styles.personalChildBorder]} />
      <Text style={[styles.dob, styles.dobPosition]}>DOB:</Text>
      <Text style={[styles.district, styles.emailTypo]}>District:</Text>
      <View style={[styles.personalInfoChild4, styles.personalChildPosition]} />
      <Text style={[styles.email, styles.emailTypo]}>Email:</Text>
      <View style={[styles.personalInfoChild5, styles.personalChildBorder]} />
      <View style={[styles.personalInfoChild6, styles.dobPosition]} />
      <View style={[styles.personalInfoChild7, styles.personalChildBorder1]} />
      <Pressable
        style={[styles.next, styles.nextPosition]}
        onPress={() => navigation.navigate("Education")}
      >
        <Text style={[styles.next1, styles.textTypo2]}>Next</Text>
      </Pressable>
      <View style={[styles.form, styles.formPosition]}>
        <Image
          style={[styles.formChild, styles.formLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.formItem, styles.formLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.formInner, styles.formInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.formChild1, styles.formChildLayout]}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <Image
          style={[styles.formChild2, styles.formChildLayout]}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
        <Text style={[styles.text1, styles.textTypo]}>1</Text>
        <Text style={[styles.text2, styles.textTypo]}>2</Text>
        <Text style={[styles.text3, styles.textTypo]}>3</Text>
        <Text style={[styles.text4, styles.textTypo]}>4</Text>
      </View>
      <Text style={styles.personalInformation}>Personal Information</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  formPosition: {
    left: 34,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  nextPosition: {
    left: "50%",
    position: "absolute",
  },
  nameTypo: {
    height: 28,
    width: 84,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
  },
  personalChildBorder: {
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
  },
  fnamePosition: {
    top: 365,
    position: "absolute",
  },
  dobTypo: {
    left: 30,
    height: 28,
    width: 84,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  cnicPosition: {
    top: 422,
    position: "absolute",
  },
  personalChildPosition: {
    marginLeft: -111,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  emailTypo: {
    left: 10,
    height: 28,
    width: 84,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  dobPosition: {
    top: 478,
    position: "absolute",
  },
  personalChildBorder1: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
  },
  formLayout: {
    bottom: "9.09%",
    width: "11.33%",
    height: "90.91%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formInnerLayout: {
    bottom: "0%",
    top: "9.09%",
    width: "11.33%",
    height: "90.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formChildLayout: {
    bottom: "35.15%",
    top: "45.45%",
    width: "19%",
    height: "19.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  personalInfoChild: {
    top: -94,
    left: -42,
    width: 468,
    height: 322,
    position: "absolute",
  },
  wifiIcon: {
    height: "47.3%",
    top: "27.03%",
    right: "8.61%",
    bottom: "25.68%",
    left: "83.98%",
    width: "7.42%",
    maxHeight: "100%",
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
    bottom: "33.78%",
    left: "89.97%",
    right: "2.61%",
    width: "7.42%",
  },
  text: {
    marginTop: -9.5,
    top: "50%",
    left: 0,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.sFProDisplaySemibold,
    fontWeight: "600",
    position: "absolute",
  },
  timesignalwifi: {
    top: 11,
    width: 327,
    height: 37,
  },
  personalInfoItem: {
    marginLeft: -110.5,
    top: 108,
    width: 218,
    height: 224,
  },
  applicationForm: {
    marginLeft: -81.5,
    top: 168,
    fontSize: FontSize.size_4xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    color: Color.colorWhite,
  },
  name: {
    top: 308,
    left: 34,
    position: "absolute",
  },
  personalInfoInner: {
    marginLeft: -111,
    top: 308,
    width: 228,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  fname: {
    left: 30,
    height: 28,
    width: 84,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
  },
  rectangleView: {
    marginLeft: -111,
    width: 228,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  cnic: {
    top: 422,
    position: "absolute",
  },
  personalInfoChild1: {
    marginLeft: -111,
    width: 228,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  nation: {
    top: 534,
    left: 34,
    position: "absolute",
  },
  personalInfoChild2: {
    top: 534,
    width: 228,
    backgroundColor: Color.colorWhite,
  },
  address: {
    top: 647,
  },
  personalInfoChild3: {
    marginLeft: -111,
    top: 647,
    width: 228,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  dob: {
    left: 30,
    height: 28,
    width: 84,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  district: {
    top: 592,
  },
  personalInfoChild4: {
    top: 592,
    width: 228,
    backgroundColor: Color.colorWhite,
  },
  email: {
    top: 478,
  },
  personalInfoChild5: {
    marginLeft: -111,
    top: 478,
    width: 228,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  personalInfoChild6: {
    marginLeft: -111,
    width: 228,
    height: 38,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: "50%",
    backgroundColor: Color.colorWhite,
  },
  personalInfoChild7: {
    marginLeft: -111,
    top: 365,
    width: 228,
    height: 38,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  next1: {
    fontSize: FontSize.size_xl,
  },
  next: {
    marginLeft: 131,
    top: 819,
  },
  formChild: {
    right: "88.67%",
    left: "0%",
  },
  formItem: {
    right: "0%",
    left: "88.67%",
  },
  formInner: {
    right: "66%",
    left: "22.67%",
  },
  ellipseIcon: {
    height: "45.45%",
    width: "11.33%",
    top: "45.45%",
    right: "66%",
    bottom: "9.09%",
    left: "22.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIcon: {
    height: "1.52%",
    width: "59.77%",
    top: "49.24%",
    right: "21.84%",
    bottom: "49.24%",
    left: "18.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formChild1: {
    right: "48.84%",
    left: "32.17%",
  },
  formChild2: {
    right: "14.93%",
    left: "66.07%",
  },
  text1: {
    left: "0%",
    top: "40.91%",
  },
  text2: {
    top: "40.91%",
    left: "88.67%",
  },
  text3: {
    left: "22.67%",
    top: "50%",
  },
  text4: {
    left: "66%",
    top: "50%",
  },
  form: {
    top: 711,
    width: 75,
    height: 66,
  },
  personalInformation: {
    marginLeft: -105,
    top: 243,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  back: {
    left: 40,
    top: 94,
    width: 24,
    height: 24,
    position: "absolute",
  },
  personalInfo: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default PersonalInfo;
