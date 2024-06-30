import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <View style={[styles.homepageChild, styles.homepageChildLayout]} />
      <View style={styles.timesignalwifi}>
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
        <Text style={styles.text}>9:20</Text>
      </View>
      <Image
        style={styles.homepageItem}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.homepageInner, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.rectangleView, styles.maleUserPosition]} />
      <Image
        style={[styles.searchIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <Pressable
        style={[styles.maleUser, styles.maleUserPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/male-user.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <View style={styles.welcomeAbdulMusawirKhanParent}>
        <Text style={[styles.welcomeAbdulMusawir, styles.updatesClr]}>{`Welcome 
ABDUL MUSAWIR KHAN !! 🖐`}</Text>
        <Text style={[styles.updates, styles.updatesClr]}>Updates:</Text>
        <View style={styles.doNotGiveYourPortedMobileWrapper}>
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
        </View>
        <Text style={[styles.updates, styles.updatesClr]}>Announcements:</Text>
        <View style={styles.doNotGiveYourPortedMobileWrapper}>
          <Text
            style={[styles.doNotGive, styles.updatesClr]}
          >{`HEC fata/Balochistan scholorship pase lll. 
Tameer-e-nau public college, Quetta. 80% Aggregate. `}</Text>
        </View>
        <Pressable
          style={[styles.leonardoDiffusionXlGenerate, styles.leonardoLayout]}
          onPress={() => navigation.navigate("PersonalInfo")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-0-1.png")}
          />
        </Pressable>
        <Text style={[styles.updates, styles.updatesClr]}>
          Application Form
        </Text>
        <Pressable
          style={[styles.leonardoDiffusionXlGenerate1, styles.leonardoLayout]}
          onPress={() => navigation.navigate("Collegespage")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-1-1.png")}
          />
        </Pressable>
        <Text style={[styles.updates, styles.updatesClr]}>Colleges</Text>
        <Image
          style={[
            styles.leonardoDiffusionXlGenerateIcon,
            styles.leonardoLayout,
          ]}
          contentFit="cover"
          source={require("../assets/leonardo-diffusion-xl-generate-me-a-simple-and-beautiful-desig-0-1.png")}
        />
        <Text style={[styles.updates, styles.updatesClr]}>{`About Us
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homepageChildLayout: {
    width: 390,
    left: 0,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineViewLayout: {
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
  leonardoLayout: {
    height: 302,
    marginTop: 16,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  homepageChild: {
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
  homepageItem: {
    marginLeft: 115,
    top: 65,
    left: "50%",
    width: 61,
    height: 52,
    position: "absolute",
  },
  homepageInner: {
    top: 77,
  },
  lineView: {
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
  welcomeAbdulMusawir: {
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
  doNotGiveYourPortedMobileWrapper: {
    borderRadius: Border.br_xs,
    width: 354,
    height: 110,
    marginTop: 16,
    backgroundColor: Color.colorGainsboro_200,
  },
  icon1: {
    borderRadius: Border.br_132xl,
  },
  leonardoDiffusionXlGenerate: {
    width: 319,
    height: 302,
  },
  icon2: {
    borderRadius: Border.br_120xl,
  },
  leonardoDiffusionXlGenerate1: {
    width: 298,
  },
  leonardoDiffusionXlGenerateIcon: {
    borderRadius: Border.br_132xl,
    width: 319,
    height: 302,
  },
  welcomeAbdulMusawirKhanParent: {
    top: 134,
    backgroundColor: Color.colorWhitesmoke,
    height: 639,
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_xl,
    left: 0,
    position: "absolute",
  },
  homepage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
