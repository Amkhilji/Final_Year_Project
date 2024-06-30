import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PersonalInfo1 = () => {
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
      <View style={styles.personalInfoInner} />
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      <View style={[styles.rectangleView, styles.personalChildBorder]} />
      <Text style={[styles.fname, styles.fnamePosition]}>F/Name:</Text>
      <View style={[styles.personalInfoChild1, styles.fnamePosition]} />
      <Text style={[styles.cnic, styles.dobTypo]}>CNIC:</Text>
      <View style={[styles.personalInfoChild2, styles.cnicPosition]} />
      <Text style={[styles.nation, styles.nameTypo]}>Nation:</Text>
      <View style={[styles.personalInfoChild3, styles.personalChildPosition]} />
      <Text style={[styles.address, styles.emailTypo]}>Address:</Text>
      <View style={[styles.personalInfoChild4, styles.personalChildBorder]} />
      <Text style={[styles.dob, styles.dobPosition]}>DOB:</Text>
      <Text style={[styles.district, styles.emailTypo]}>District:</Text>
      <View style={[styles.personalInfoChild5, styles.personalChildPosition]} />
      <Text style={[styles.email, styles.emailTypo]}>Email:</Text>
      <View style={[styles.personalInfoChild6, styles.personalChildBorder]} />
      <View style={[styles.personalInfoChild7, styles.dobPosition]} />
      <View style={[styles.personalInfoChild8, styles.personalChildBorder1]} />
      <Pressable
        style={[styles.next, styles.nextPosition]}
        onPress={() => navigation.navigate("Education1")}
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
          style={[styles.ellipseIcon, styles.formInnerLayout]}
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
      <Image
        style={[styles.iconEdit, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-edit1.png")}
      />
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
    maxWidth: "100%",
  },
  signalsIcon: {
    height: "54.05%",
    width: "6.85%",
    top: "21.62%",
    right: "17.77%",
    bottom: "24.32%",
    left: "75.38%",
  },
  batteryIcon: {
    height: "47.3%",
    top: "27.03%",
    right: "0%",
    bottom: "25.68%",
    left: "92.58%",
    width: "7.42%",
    maxWidth: "100%",
  },
  text: {
    width: "13.84%",
    top: "16.22%",
    left: "0%",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  timesignalwifi: {
    top: 0,
    width: 191,
    height: 37,
  },
  personalInfoItem: {
    marginLeft: -181,
    top: 87,
    width: 360,
    height: 360,
  },
  applicationForm: {
    marginLeft: -116,
    top: 49,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  personalInfoInner: {
    marginTop: -207.5,
    top: "50%",
    left: 35,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 304,
    height: 1,
    position: "absolute",
  },
  name: {
    top: 310,
    left: 31,
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -111,
    top: 308,
    width: 221,
    position: "absolute",
  },
  fname: {
    left: 30,
    color: Color.colorBlack,
    textAlign: "left",
  },
  personalInfoChild1: {
    marginLeft: -111,
    width: 221,
    height: 38,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: "50%",
  },
  cnic: {
    top: 421,
    position: "absolute",
  },
  personalInfoChild2: {
    marginLeft: -111,
    width: 221,
  },
  nation: {
    top: 253,
    left: 31,
    position: "absolute",
  },
  personalInfoChild3: {
    top: 254,
    width: 221,
  },
  address: {
    top: 587,
  },
  personalInfoChild4: {
    marginLeft: -111,
    top: 588,
    width: 221,
    position: "absolute",
  },
  dob: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  district: {
    top: 644,
  },
  personalInfoChild5: {
    top: 643,
    width: 221,
  },
  email: {
    top: 532,
  },
  personalInfoChild6: {
    marginLeft: -111,
    top: 530,
    width: 221,
    position: "absolute",
  },
  personalInfoChild7: {
    marginLeft: -111,
    width: 221,
    height: 38,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    left: "50%",
  },
  personalInfoChild8: {
    marginLeft: -111,
    top: 365,
    width: 221,
    height: 38,
    position: "absolute",
  },
  next1: {
    fontSize: FontSize.size_base,
  },
  next: {
    marginLeft: 70,
    top: 697,
    borderRadius: Border.br_md,
    backgroundColor: Color.orangeColor,
    width: 94,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
  },
  formChild: {
    left: "0%",
    right: "88.67%",
  },
  formItem: {
    right: "0%",
    left: "88.67%",
  },
  formInner: {
    left: "22.67%",
    right: "66%",
  },
  ellipseIcon: {
    right: "22.67%",
    left: "66%",
  },
  lineIcon: {
    height: "24.24%",
    width: "51.34%",
    top: "37.88%",
    right: "24.33%",
    bottom: "37.88%",
    left: "24.33%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formChild1: {
    right: "40.5%",
    left: "40.5%",
  },
  formChild2: {
    right: "0.5%",
    left: "80.5%",
  },
  text1: {
    top: "36.36%",
    left: "7.83%",
  },
  text2: {
    top: "36.36%",
    left: "30.17%",
  },
  text3: {
    top: "36.36%",
    left: "52.5%",
  },
  text4: {
    top: "36.36%",
    left: "74.83%",
  },
  form: {
    top: 140,
    width: 167,
    height: 44,
  },
  personalInformation: {
    top: 122,
    left: 35,
    fontSize: FontSize.size_2xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  back: {
    left: 14,
    top: 18,
    width: 30,
    height: 30,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  iconEdit: {
    height: "3.47%",
    width: "6.11%",
    top: "10.44%",
    right: "10.28%",
    bottom: "86.09%",
    left: "83.61%",
  },
  personalInfo: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 850,
    overflow: "hidden",
  },
});

export default PersonalInfo1;
