import { Colors, createTheme, useTheme } from "@rneui/themed"
import { RecursivePartial } from "@rneui/themed/dist/config/theme"

export const AppColors: RecursivePartial<Colors> = {
  primary: "#498494",
  secondary: "#F76F39",
  background: "#FFF",
  success: "#14B8AE",
  warning: "#FCAE3B",
  black: "#000",
  white: "#FFF",
  searchBg: "#fbf9f9",
  grey0: "#4B4C4D",
}
export const useThemeColors = () => {
  return useTheme().theme.colors
}

export function useTc() {
  return useThemeColors()
}
const theme = createTheme({
  darkColors: AppColors,
  lightColors: AppColors,
  spacing: {
    sm: 15,
    lg: 15,
    md: 15,
    xl: 15,
    xs: 15,
  },
  components: {
    Button: {
      buttonStyle: {
        height: 57,
        borderRadius: 7,
      },
      disabledStyle: {
        opacity: 0.4,
        backgroundColor: AppColors.primary,
      },
      disabledTitleStyle: {
        color: "#FFF",
      },
      titleStyle: {
        color: "#FFF",
        fontFamily: "Bold",
        fontWeight: "700",
      },
    },
  },
})

export default theme
