import React from "react";
import { StyleSheet, View, Text, Linking, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const AboutUsCollege = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUsCollege}>
      <View style={[styles.aboutUsCollegeChild, styles.collegePosition]} />
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
        style={[styles.aboutUsCollegeItem, styles.aboutPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View
        style={[styles.tameerENauPublicCollegeParent, styles.collegePosition]}
      >
        <Text style={[styles.tameerENau, styles.mottoTypo]}>
          Tameer E Nau Public College:
        </Text>
        <Text style={[styles.motto, styles.mottoTypo]}>Motto:</Text>
        <Text
          style={[styles.wisdomIsThe, styles.mottoTypo]}
        >{`Wisdom is the base of my deen (religion) and knowledge is my
 power`}</Text>
        <Text style={[styles.established, styles.mottoTypo]}>Established:</Text>
        <Text style={[styles.july1984, styles.mottoTypo]}>july, 1984</Text>
        <Text style={[styles.presidentFazalHaqContainer, styles.mottoTypo]}>
          <Text style={styles.president}>President</Text>
          <Text style={styles.fazalHaqMir}>{`: Fazal Haq Mir (S.I)
`}</Text>
          <Text style={styles.academicStaff}>{`Academic staff `}</Text>
          <Text style={styles.fazalHaqMir}>{`: 38
`}</Text>
          <Text style={styles.academicStaff}>
            <Text style={styles.undergraduates1}>Undergraduates</Text>
          </Text>
          <Text style={styles.academicStaff}>:</Text>
          <Text style={styles.fazalHaqMir}>{` 950
`}</Text>
          <Text style={styles.academicStaff}>Location:</Text>
          <Text style={styles.fazalHaqMir}>{` `}</Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Quetta</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>, </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Balochistan</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
            {`, Pakistan
Campus: 4.5 acres (0.5km²)
`}
          </Text>
          <Text style={styles.academicStaff}>
            <Text style={styles.undergraduates1}>Colors</Text>
          </Text>
          <Text style={styles.academicStaff}>{`: `}</Text>
          <Text style={styles.fazalHaqMir}>{`White shirt and Gray trousers
`}</Text>
          <Text style={styles.academicStaff}>
            <Text style={styles.undergraduates1}>Nickname</Text>
          </Text>
          <Text style={styles.academicStaff}>:</Text>
          <Text style={styles.fazalHaqMir}>
            {` Tameerians

Tameer-i-Nau Public College is an educational institution in the province of `}
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Balochistan</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>, </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Pakistan</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
            . The campus is situated in the centre of the provincial capital
            city of 
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Quetta</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>. The </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Principal</Text>
          </Text>
          <Text style={styles.fazalHaqMir}> has been awarded the </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Sitara-e-Imtiaz</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
             for distinguished merit and national and international levels.　The
            college was established in July 1983 as an initiative of local
            people. Today it remains a 
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>non-commercial</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
            {` institution governed by a registered body, Idara Tameer-i-Nau.
The `}
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Principal</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
             of Tameer-i-Nau public College, (Late) Fazal-Haq-Mir, in
            recognition of outstanding services has been awarded 
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Sitara-i-Imtiaz</Text>
          </Text>
          <Text style={styles.fazalHaqMir}> by the </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>President of Pakistan</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>.</Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>[1]</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>[2]</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>This is unusual for a </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>provincial</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
             institution because usually the medal is given to the 
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>person</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
            {` who has achieved excellence in his or her field at the national or international levels.
The `}
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>
              Federal Ministry of Education
            </Text>
          </Text>
          <Text style={styles.fazalHaqMir}>, </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>Islamabad</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
            , has awarded the college the Certificate of Merit and
            Excellence for the fifth consecutive time, judging it as the best 
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>college</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
            {` in Balochistan.
The institution is planning to transform its infrastructure into a university`}
          </Text>
          <Text style={styles.fazalHaqMir}>
            <Text style={styles.undergraduates1}>{`[3]
`}</Text>
          </Text>
          <Text style={styles.fazalHaqMir}>
            {`


`}
          </Text>
        </Text>
      </View>
      <Text style={[styles.aboutUs, styles.aboutPosition]}>About us!</Text>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("HomePageCollege")}
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
  collegePosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
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
    fontSize: FontSize.size_5xl_7,
  },
  aboutPosition: {
    left: "50%",
    position: "absolute",
  },
  mottoTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  aboutUsCollegeChild: {
    top: 0,
    backgroundColor: Color.colorSteelblue,
    height: 134,
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
    position: "absolute",
  },
  timesignalwifi: {
    top: 8,
    left: 34,
    width: 337,
    height: 37,
    position: "absolute",
  },
  aboutUsCollegeItem: {
    marginLeft: 115,
    top: 65,
    width: 61,
    height: 52,
  },
  tameerENau: {
    top: 9,
    left: 16,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl_7,
  },
  motto: {
    top: 53,
    fontSize: FontSize.size_xl,
    left: 16,
    color: Color.colorBlack,
  },
  wisdomIsThe: {
    top: 59,
    left: 94,
    width: 265,
    fontSize: FontSize.size_sm,
  },
  established: {
    top: 122,
    fontSize: FontSize.size_xl,
    left: 16,
    color: Color.colorBlack,
  },
  july1984: {
    top: 129,
    left: 155,
    width: 108,
    height: 19,
    fontSize: FontSize.size_sm,
  },
  president: {
    textDecoration: "underline",
    fontSize: FontSize.size_xl,
  },
  fazalHaqMir: {
    fontSize: FontSize.size_sm,
  },
  academicStaff: {
    fontSize: FontSize.size_xl,
  },
  undergraduates1: {
    textDecoration: "underline",
  },
  presidentFazalHaqContainer: {
    top: 152,
    left: 17,
    width: 367,
    height: 550,
  },
  tameerENauPublicCollegeParent: {
    bottom: 0,
    backgroundColor: Color.colorWhitesmoke,
    height: 710,
  },
  aboutUs: {
    marginLeft: -68,
    top: 73,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl_7,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    left: 1,
    top: 63,
    width: 71,
    height: 47,
    position: "absolute",
  },
  aboutUsCollege: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUsCollege;
