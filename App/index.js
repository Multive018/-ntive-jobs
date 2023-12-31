import { useState } from "react";
import {View, ScrollView, SafeAreaView, Text} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

export default function Home(){
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.blue }}>
      <Stack.Screen options={{
        headerStyle: {backgroundColor: COLORS.blue},
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
        ),
        headerShadowVisible: false,
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
        ),
        headerTitle: ""
        }}
         />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1, padding: SIZES.medium }}>
          <Welcome/>
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}