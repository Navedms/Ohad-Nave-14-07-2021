import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  flexDirectionRow: {
    flexDirection: Platform.OS === "android" ? "row-reverse" : "row",
  },
  direction: {
    directionLeft: Platform.OS === "android" ? "rtl" : "ltr",
  },
  iconSize: 22,
  errorMsg: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
