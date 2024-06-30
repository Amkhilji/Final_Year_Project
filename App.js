import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import HomeScreenCollege from "./screens/HomeScreenCollege";
import LoginScreen from "./screens/LoginScreen";
import LoginScreenCollege from "./screens/LoginScreenCollege";
import SignupScreen from "./screens/SignupScreen";
import Profile from "./screens/Profile";
import CollegeProfile from "./screens/CollegeProfile";
import PersonalInfo from "./screens/PersonalInfo";
import Education from "./screens/Education";
import ProgramDetails from "./screens/ProgramDetails";
import FinalForm from "./screens/FinalForm";
import HomePage from "./screens/HomePage";
import HomePageCollege from "./screens/HomePageCollege";
import Collegespage from "./screens/Collegespage";
import AboutUsCollege from "./screens/AboutUsCollege";
import StudentsForm from "./screens/StudentsForm";
import Frame from "./screens/Frame";
import PersonalInfo1 from "./screens/PersonalInfo1";
import Education1 from "./screens/Education1";
import ProgramDetails1 from "./screens/ProgramDetails1";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreenCollege" component={HomeScreenCollege} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreenCollege" component={LoginScreenCollege} options={{ headerShown: false }} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="CollegeProfile" component={CollegeProfile} options={{ headerShown: false }} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{ headerShown: false }} />
          <Stack.Screen name="Education" component={Education} options={{ headerShown: false }} />
          <Stack.Screen name="ProgramDetails" component={ProgramDetails} options={{ headerShown: false }} />
          <Stack.Screen name="FinalForm" component={FinalForm} options={{ headerShown: false }} />
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="HomePageCollege" component={HomePageCollege} options={{ headerShown: false }} />
          <Stack.Screen name="Collegespage" component={Collegespage} options={{ headerShown: false }} />
          <Stack.Screen name="AboutUsCollege" component={AboutUsCollege} options={{ headerShown: false }} />
          <Stack.Screen name="StudentsForm" component={StudentsForm} options={{ headerShown: false }} />
          <Stack.Screen name="Frame" component={Frame} options={{ headerShown: false }} />
          <Stack.Screen name="PersonalInfo1" component={PersonalInfo1} options={{ headerShown: false }} />
          <Stack.Screen name="Education1" component={Education1} options={{ headerShown: false }} />
          <Stack.Screen name="ProgramDetails1" component={ProgramDetails1} options={{ headerShown: false }} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
