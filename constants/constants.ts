import { StackNavigationOptions } from "@react-navigation/stack"
import { Dimensions, Platform, StatusBar } from "react-native"

export const COLORS = {
  app1: "#DB3251",
  app2: "#296675",
  app3: "#FFDD44",
  tint: "#f6f7F9",
  textColor: "#112222",
  lightText: "#9E9E9E",
  green: "#04C0B5",
  grey: "#666",
  grey1: "#EEE",
  red: "#DD3300",
  yellow: "#FFB802",
  black: "#000000",
}

export const screenOptions: StackNavigationOptions = {
  gestureEnabled: Platform.OS === "ios",
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    const translateX = current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [layouts.screen.width, 0],
    })

    return {
      cardStyle: {
        transform: [{ translateX }],
      },
    }
  },
}

export const DIMENSIONS = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height - (StatusBar.currentHeight || 0),
}
