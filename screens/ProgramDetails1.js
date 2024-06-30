import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

const ProgramDetails1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.programDetails}>
      <Image
        style={styles.programDetailsChild}
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
        style={[styles.programDetailsItem, styles.nextPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={styles.applicationForm}>Application Form</Text>
      <Text style={[styles.board, styles.boardTypo]}>Board:</Text>
      <View style={[styles.programDetailsInner, styles.rectangleViewLayout]} />
      <Text style={[styles.field, styles.fieldTypo]}>Field:</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.subjects, styles.boardTypo]}>Subjects:</Text>
      <View style={[styles.programDetailsChild1, styles.sportsPosition]} />
      <Text style={[styles.sports, styles.sportsPosition]}>Sports:</Text>
      <Text style={[styles.uploadDocuments, styles.fieldTypo]}>
        Upload Documents:
      </Text>
      <View style={[styles.programDetailsChild2, styles.programChildBorder]} />
      <View style={[styles.programDetailsChild3, styles.programChildBorder]} />
      <Pressable
        style={[styles.next, styles.nextPosition]}
        onPress={() => navigation.navigate("HomePageCollege")}
      >
        <Text style={[styles.next1, styles.textTypo2]}>Next</Text>
      </Pressable>
      <View style={[styles.form, styles.formPosition]}>
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
          style={[styles.formInner, styles.formInnerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-41.png")}
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
      <Text style={styles.education}>{`Program Details & Docs`}</Text>
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("Education1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <Text
        style={[styles.chooseSubjects, styles.chooseSubjectsPosition]}
      >{`Choose Subjects `}</Text>
      <Image
        style={[styles.expandArrowIcon, styles.chooseSubjectsPosition]}
        contentFit="cover"
        source={require("../assets/expand-arrow.png")}
      />
      <Image
        style={[styles.iconEdit, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-edit2.png")}
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
    color: "white",
    fontWeight: "700",
    textAlign: "left",
  },
  nextPosition: {
    left: "50%",
    position: "absolute",
  },
  boardTypo: {
    height: 28,
    fontWeight: "300",
    fontSize: 14,
    color: "black",
    textAlign: "left",
  },
  rectangleViewLayout: {
    height: 38,
    width: 293,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    marginLeft: -110,
    left: "50%",
    position: "absolute",
  },
  fieldTypo: {
    left: 27,
    height: 28,
    color: "black",
    fontWeight: "300",
    fontSize: 14,
    textAlign: "left",
    position: "absolute",
  },
  sportsPosition: {
    top: 490,
    position: "absolute",
  },
  programChildBorder: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
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
    fontSize: 16,
    color: "black",
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  chooseSubjectsPosition: {
    top: 435,
    position: "absolute",
  },
  programDetailsChild: {
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
    left: "75.37%",
  },
  batteryIcon: {
    height: "33.78%",
    top: "32.43%",
    bottom: "33.78%",
    left: "92.58%",
    right: "0%",
    width: "7.42%",
    maxWidth: "100%",
  },
  text: {
    textAlign: "left",
    fontSize: 28,
    top: "0%",
    color: "white",
    fontWeight: "700",
    left: "0%",
    position: "absolute",
  },
  timesignalwifi: {
    top: 8,
    width: 337,
    height: 37,
  },
  programDetailsItem: {
    marginLeft: 115,
    top: 65,
    width: 61,
    height: 52,
  },
  applicationForm: {
    top: 99,
    marginLeft: -110,
    left: "50%",
    textAlign: "left",
    color: "white",
    fontWeight: "700",
    fontSize: 28,
    position: "absolute",
  },
  board: {
    top: 299,
    width: 125,
    left: 19,
    fontWeight: "300",
    fontSize: 14,
    position: "absolute",
  },
  programDetailsInner: {
    top: 294,
  },
  field: {
    top: 366,
    width: 109,
  },
  rectangleView: {
    top: 361,
  },
  subjects: {
    top: 429,
    left: 16,
    width: 131,
    position: "absolute",
  },
  programDetailsChild1: {
    height: 36,
    width: 293,
    top: 490,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    marginLeft: -110,
    left: "50%",
  },
  sports: {
    width: 84,
    height: 28,
    fontWeight: "300",
    fontSize: 14,
    color: "black",
    textAlign: "left",
    left: 19,
  },
  uploadDocuments: {
    top: 559,
    width: 198,
  },
  programDetailsChild2: {
    marginLeft: -96,
    top: 428,
    width: 224,
    height: 37,
  },
  programDetailsChild3: {
    height: "4.38%",
    marginLeft: 61,
    top: "91.23%",
    bottom: "4.38%",
    borderRadius: 50,
    backgroundColor: "gray",
    width: 96,
  },
  next1: {
    height: "3.79%",
    marginLeft: 85,
    fontSize: 24,
    width: 76,
    textAlign: "left",
  },
  next: {
    top: "91.82%",
  },
  formChild: {
    right: "88.67%",
    left: "0%",
    width: "11.33%",
    height: "90.91%",
  },
  formItem: {
    right: "59%",
    left: "29.67%",
  },
  formInner: {
    right: "29%",
    left: "59.67%",
  },
  ellipseIcon: {
    left: "88.67%",
    right: "0%",
  },
  lineIcon: {
    top: "43.33%",
    right: "70.33%",
    bottom: "37.27%",
    left: "10.67%",
    width: "19%",
    height: "19.39%",
    position: "absolute",
    overflow: "hidden",
  },
  formChild1: {
    right: "40%",
    left: "41%",
  },
  formChild2: {
    right: "9.67%",
    left: "71.33%",
  },
  text1: {
    left: "4.33%",
    top: "15.15%",
    fontSize: 16,
  },
  text2: {
    left: "33.33%",
    fontSize: 16,
    top: "9.09%",
  },
  text3: {
    left: "63.67%",
    top: "15.15%",
    fontSize: 16,
  },
  text4: {
    left: "92.33%",
    top: "15.15%",
    fontSize: 16,
  },
  form: {
    top: 146,
    width: 300,
    height: 33,
  },
  education: {
    marginLeft: -141,
    top: 238,
    fontSize: 28,
    color: "black",
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    left: 11,
    top: 52,
    width: 71,
    height: 47,
    position: "absolute",
  },
  chooseSubjects: {
    left: 113,
    fontSize: 16,
    color: "gray",
    textAlign: "left",
  },
  expandArrowIcon: {
    left: 277,
    width: 40,
    height: 27,
  },
  iconEdit: {
    height: "55.33%",
    width: "87.44%",
    top: "24.05%",
    right: "0.77%",
    bottom: "20.62%",
    left: "11.79%",
  },
  programDetails: {
    backgroundColor: "white",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProgramDetails1;
