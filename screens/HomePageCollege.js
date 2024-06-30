import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HomePageCollege = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepageCollege}>
      <View style={[styles.homepageCollegeChild, styles.rectangleViewLayout]} />
      <View style={styles.timesignalwifi}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.signalsIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/signals.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Text style={styles.text}>9:20</Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("CollegeProfile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
      </Pressable>
      <View style={[styles.homepageCollegeItem, styles.homepageLayout]} />
      <View style={[styles.homepageCollegeInner, styles.homepageLayout]} />
      <View style={[styles.rectangleView, styles.maleUserPosition]} />
      <Image
        style={[styles.searchIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Pressable
        style={[styles.maleUser, styles.maleUserPosition]}
        onPress={() => navigation.navigate("CollegeProfile")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/male-user.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <View style={styles.welcomeTameerENauPublicCoParent}>
        <Text style={[styles.welcomeTameerE, styles.updatesClr]}>{`Welcome 
TAMEER E NAU PUBLIC COLLEGE QUETTA !! 🖐`}</Text>
        <Text style={[styles.updates, styles.updatesClr]}>Updates:</Text>
        <View style={styles.doNotGiveYourPortedMobileParent}>
          <Text style={[styles.doNotGive, styles.updatesClr]}>
            DO NOT give your ported mobile number (which is converted from one
            network to another) so that SMS delivery is ensure. Please make sure
            you have not blocked the Business/ unwanted SMS through PTA
            Instruction by Reg to 3627, if so please unblock by sending sms
            "Unreg" to 3627 in order to receive SMS alerts from NTS. And if you
            have any sms blocker installed on your cell phone or your SIM is
            inactive / offline, NTS will not be responsible for the non-delivery
            of the SMS..
          </Text>
          <Image
            style={[styles.iconEdit, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-edit.png")}
          />
        </View>
        <Text style={[styles.updates, styles.updatesClr]}>Announcements:</Text>
        <View style={styles.doNotGiveYourPortedMobileParent}>
          <Text
            style={[styles.doNotGive, styles.updatesClr]}
          >{`HEC fata/Balochistan scholorship pase lll. 
Tameer-e-nau public college, Quetta. 80% Aggregate. `}</Text>
          <Image
            style={[styles.iconEdit1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-edit.png")}
          />
        </View>
        <Pressable
          style={[styles.leonardoDiffusionXlGenerate, styles.leonardoLayout]}
          onPress={() => navigation.navigate("PersonalInfo1")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-0-1.png")}
          />
        </Pressable>
        <Text style={[styles.updates, styles.updatesClr]}>
          Application Form
        </Text>
        <Pressable
          style={[styles.leonardoDiffusionXlGenerate1, styles.leonardoLayout]}
          onPress={() => navigation.navigate("StudentsForm")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-1-11.png")}
          />
        </Pressable>
        <Text style={[styles.colleges, styles.updatesClr]}>Colleges</Text>
        <Pressable
          style={[styles.leonardoDiffusionXlGenerate, styles.leonardoLayout]}
          onPress={() => navigation.navigate("AboutUsCollege")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-0-1.png")}
          />
        </Pressable>
        <Text style={[styles.updates, styles.updatesClr]}>{`About Us
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    width: 390,
    left: 0,
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  homepageLayout: {
    height: 6,
    width: 45,
    borderTopWidth: 6,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    left: 14,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  maleUserPosition: {
    height: 71,
    top: 773,
    position: "absolute",
  },
  iconPosition: {
    width: 42,
    top: 788,
    position: "absolute",
  },
  updatesClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  iconLayout: {
    width: "13.84%",
    height: "34.55%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  leonardoLayout: {
    height: 302,
    marginTop: 16,
  },
  homepageCollegeChild: {
    top: 0,
    backgroundColor: Color.colorSteelblue,
    height: 134,
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
    right: "0%",
    bottom: "33.78%",
    left: "92.58%",
    width: "7.42%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    top: "0%",
    left: "0%",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    position: "absolute",
  },
  timesignalwifi: {
    top: 8,
    left: 34,
    width: 337,
    height: 37,
    position: "absolute",
  },
  icon: {
    marginLeft: 115,
  },
  wrapper: {
    left: "50%",
    top: 65,
    width: 61,
    height: 52,
    position: "absolute",
  },
  homepageCollegeItem: {
    top: 77,
  },
  homepageCollegeInner: {
    top: 88,
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro_200,
    width: 390,
    left: 0,
  },
  searchIcon: {
    left: 153,
    height: 49,
  },
  maleUser: {
    left: 296,
    width: 77,
  },
  homeIcon: {
    left: 19,
    height: 42,
  },
  welcomeTameerE: {
    width: 349,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    color: Color.colorBlack,
  },
  updates: {
    marginTop: 16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    color: Color.colorBlack,
  },
  doNotGive: {
    top: 16,
    left: 28,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    width: 326,
    height: 888,
    position: "absolute",
  },
  iconEdit: {
    top: "4.55%",
    right: "0.28%",
    bottom: "60.91%",
    left: "85.88%",
  },
  doNotGiveYourPortedMobileParent: {
    borderRadius: Border.br_xs,
    width: 354,
    height: 110,
    marginTop: 16,
    backgroundColor: Color.colorGainsboro_200,
  },
  iconEdit1: {
    top: "8.18%",
    right: "2.26%",
    bottom: "57.27%",
    left: "83.9%",
  },
  icon2: {
    borderRadius: Border.br_132xl,
  },
  leonardoDiffusionXlGenerate: {
    width: 319,
  },
  icon3: {
    borderRadius: Border.br_120xl,
  },
  leonardoDiffusionXlGenerate1: {
    width: 298,
  },
  colleges: {
    width: 116,
    marginTop: 16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
    color: Color.colorBlack,
  },
  welcomeTameerENauPublicCoParent: {
    top: 134,
    backgroundColor: Color.colorWhitesmoke,
    height: 639,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_xl,
    left: 0,
    position: "absolute",
  },
  homepageCollege: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePageCollege;
