import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const FinalForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.finalForm}>
      <Image
        style={styles.finalFormChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={[styles.timesignalwifi, styles.upgradeIconLayout]}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.signalsIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/signals.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Text style={[styles.text, styles.textTypo4]}>9:20</Text>
      </View>
      <Image
        style={[styles.finalFormItem, styles.formPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.applicationForm, styles.formPosition]}>
        Application Form
      </Text>
      <View style={styles.form}>
        <Image
          style={[styles.formChild, styles.formLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Image
          style={[styles.formItem, styles.formLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Image
          style={[styles.formInner, styles.formInnerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.formInnerPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-41.png")}
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
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("ProgramDetails")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Image
        style={styles.amk1Icon}
        contentFit="cover"
        source={require("../assets/amk-1.png")}
      />
      <Text
        style={[styles.abdulMusawirKhan, styles.textTypo]}
      >{`Abdul Musawir Khan `}</Text>
      <Text style={[styles.musawirkhilji88gmailocm, styles.text5Typo]}>
        musawirkhilji88@gmail.ocm
      </Text>
      <Text style={[styles.text5, styles.text5Typo]}>54400-9773985-3</Text>
      <Image
        style={styles.solaruserCheckBoldIcon}
        contentFit="cover"
        source={require("../assets/solarusercheckbold.png")}
      />
      <View style={[styles.finalFormInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.finalFormChild1, styles.finalChildPosition]} />
      <View style={[styles.finalFormChild2, styles.finalChildPosition]} />
      <Text
        style={[styles.personalInformation, styles.detailsTypo]}
      >{`Personal Information `}</Text>
      <Text
        style={[styles.contactInformation, styles.detailsTypo]}
      >{`Contact Information `}</Text>
      <Text
        style={[styles.educationDetails, styles.detailsTypo]}
      >{`Education Details `}</Text>
      <Text style={[styles.programDetails, styles.detailsTypo]}>
        Program Details
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.nameIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/name.png")}
      />
      <Image
        style={styles.contactIcon}
        contentFit="cover"
        source={require("../assets/contact.png")}
      />
      <Image
        style={[styles.graduationCapIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/graduation-cap.png")}
      />
      <Image
        style={[styles.upgradeIcon, styles.upgradeIconLayout]}
        contentFit="cover"
        source={require("../assets/upgrade.png")}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Collegespage")}
      >
        <View style={[styles.buttonChild, styles.iconLayout]} />
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Collegespage")}
        >
          <Text style={styles.submit}>Submit</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  upgradeIconLayout: {
    height: 37,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo4: {
    textAlign: "left",
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    fontFamily: FontFamily.poppinsBold,
  },
  formPosition: {
    left: "50%",
    position: "absolute",
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
  formInnerPosition: {
    bottom: "0%",
    position: "absolute",
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
    color: Color.colorBlack,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  text5Typo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 54,
    width: 316,
    backgroundColor: Color.colorGainsboro_200,
    left: 38,
    position: "absolute",
  },
  finalChildPosition: {
    left: 40,
    height: 54,
    width: 316,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  detailsTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "80%",
    right: "12.56%",
    width: "7.44%",
    height: "3.32%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    width: 40,
    left: 43,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  finalFormChild: {
    top: 0,
    left: 0,
    width: 393,
    height: 852,
    position: "absolute",
  },
  wifiIcon: {
    height: "40.54%",
    width: "18.75%",
    top: "45.95%",
    right: "66.56%",
    bottom: "13.51%",
    left: "14.69%",
  },
  signalsIcon: {
    height: "39.19%",
    width: "20.31%",
    top: "47.3%",
    right: "43.75%",
    bottom: "13.51%",
    left: "35.94%",
  },
  batteryIcon: {
    height: "47.3%",
    width: "24.69%",
    top: "35.14%",
    right: "14.06%",
    bottom: "17.57%",
    left: "61.25%",
  },
  text: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  timesignalwifi: {
    top: 26,
    left: 33,
    width: 118,
    height: 37,
  },
  finalFormItem: {
    marginLeft: -34.5,
    top: 43,
    width: 69,
    height: 69,
  },
  applicationForm: {
    marginLeft: -94,
    top: 44,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorWhite,
    textAlign: "left",
  },
  formChild: {
    right: "0%",
    left: "88.67%",
  },
  formItem: {
    right: "88.67%",
    left: "0%",
  },
  formInner: {
    height: "100%",
    width: "19.67%",
    right: "60.66%",
    left: "19.67%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseIcon: {
    height: "100%",
    width: "19.67%",
    right: "39.34%",
    left: "41%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lineIcon: {
    height: "2.5%",
    width: "100%",
    top: "53.41%",
    right: "0%",
    bottom: "44.09%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  formChild1: {
    right: "60.5%",
    left: "20.5%",
  },
  formChild2: {
    right: "39.5%",
    left: "41.5%",
  },
  text1: {
    fontSize: FontSize.size_13xl,
    left: "0%",
    top: "19.32%",
    fontFamily: FontFamily.poppinsBold,
  },
  text2: {
    fontSize: FontSize.size_13xl,
    left: "87.5%",
    top: "18.18%",
    fontFamily: FontFamily.poppinsBold,
  },
  text3: {
    fontSize: FontSize.size_13xl,
    left: "59%",
    top: "19.32%",
    fontFamily: FontFamily.poppinsBold,
  },
  text4: {
    fontSize: FontSize.size_13xl,
    left: "38.5%",
    top: "20.45%",
    fontFamily: FontFamily.poppinsBold,
  },
  form: {
    top: 136,
    left: 34,
    width: 330,
    height: 44,
    position: "absolute",
  },
  back: {
    left: 24,
    top: 54,
    width: 24,
    height: 24,
    position: "absolute",
  },
  amk1Icon: {
    top: 234,
    left: 244,
    width: 112,
    height: 112,
    position: "absolute",
  },
  abdulMusawirKhan: {
    top: 267,
    left: 54,
    fontFamily: FontFamily.poppinsBold,
    fontSize: FontSize.size_lg,
  },
  musawirkhilji88gmailocm: {
    top: 309,
    left: 54,
  },
  text5: {
    top: 331,
    left: 55,
  },
  solaruserCheckBoldIcon: {
    top: 245,
    left: 201,
    width: 36,
    height: 36,
    position: "absolute",
  },
  finalFormInner: {
    top: 438,
  },
  rectangleView: {
    top: 521,
  },
  finalFormChild1: {
    top: 590,
  },
  finalFormChild2: {
    top: 677,
  },
  personalInformation: {
    top: 451,
    left: 58,
  },
  contactInformation: {
    top: 533,
    left: 58,
  },
  educationDetails: {
    top: 602,
    left: 58,
  },
  programDetails: {
    top: 689,
    left: 58,
  },
  vectorIcon: {
    top: "51.23%",
    bottom: "45.45%",
  },
  vectorIcon1: {
    top: "68.43%",
    bottom: "28.25%",
  },
  vectorIcon2: {
    top: "77.63%",
    bottom: "19.05%",
  },
  vectorIcon3: {
    top: "84.73%",
    bottom: "11.95%",
  },
  nameIcon: {
    top: 447,
    height: 32,
  },
  contactIcon: {
    top: 532,
    left: 43,
    width: 40,
    height: 40,
    position: "absolute",
  },
  graduationCapIcon: {
    top: 598,
    height: 40,
  },
  upgradeIcon: {
    top: 689,
    left: 42,
    width: 40,
  },
  buttonChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.lightCoral,
    left: 0,
    top: 0,
    position: "absolute",
  },
  login: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  submit: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.colorWhite,
    textAlign: "left",
    fontWeight: "600",
  },
  button: {
    left: 113,
    bottom: 68,
    width: 165,
    height: 48,
    position: "absolute",
  },
  finalForm: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default FinalForm;
