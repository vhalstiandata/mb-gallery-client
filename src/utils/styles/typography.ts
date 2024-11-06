import { TypographyOptions } from "@mui/material/styles/createTypography";
import { primaryColor, primaryText } from "@/utils/styles/colors";

export const getTypography = (): TypographyOptions => {
  return {
    h1: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 94,
      lineHeight: "123px",
      color: primaryText,
    },
    h2: {
      // fontFamily: fontRoboto,
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 58,
      lineHeight: "76px",
      color: primaryColor,
    },
    h3: {
      // fontFamily: fontRoboto,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "42px",
      letterSpacing: "0.05em",
      color: primaryColor,
    },
    subtitle1: {
      // fontFamily: fontPalatino,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 26,
      lineHeight: "30px",
      color: primaryText,
    },
    subtitle2: {
      // fontFamily: fontPalatino,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 22,
      lineHeight: "26px",
      color: primaryText,
    },
    body1: {
      fontFamily: "var(--font-roboto)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "147%",
      color: primaryText,
    },
    body2: {
      // fontFamily: fontRoboto,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "21px",
      color: primaryText,
      letterSpacing: 0,
    },
    button: {
      // fontFamily: fontRoboto,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 22,
      lineHeight: "29px",
      textTransform: "capitalize",
    },
    caption: {
      // fontFamily: fontSourceSansPro,
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "18px",
      color: primaryText,
    },
    overline: {
      // fontFamily: fontSourceSansPro,
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "15px",
      textTransform: "uppercase",
      color: primaryText,
    },
  };
};
