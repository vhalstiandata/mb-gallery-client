import { Components } from "@mui/material/styles";
import { bgColor, borderColor, primaryColor } from "./colors";
import { Theme } from "@mui/material/styles/createThemeNoVars";
import { CssVarsTheme } from "@mui/material/styles/createThemeWithVars";

export const getOverridesComponent = (): Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
> => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          scrollBehavior: "smooth",
          fontSize: "16px",
        },
        body: {
          boxSizing: "border-box",
          height: "100%",
          margin: 0,
          padding: 0,
          display: "flex",
          overflowX: "hidden",
        },
        "#__next": {
          flex: 1,
          display: "flex",
          flexDirection: "column",
        },
        a: {
          color: "currentColor",
          textDecoration: "none",
        },
        p: {
          color: "currentColor",
          margin: 0,
          padding: 0,
        },
        span: {
          color: "currentColor",
          margin: 0,
          padding: 0,
        },
        "::-moz-selection": {
          color: bgColor,
          backgroundColor: primaryColor,
        },
        "::selection": {
          color: bgColor,
          backgroundColor: primaryColor,
        },
        "::-webkit-scrollbar": {
          width: "10px",
        },
        "::-webkit-scrollbar-thumb": {
          background: borderColor,
          borderRadius: "10px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          // fontFamily: fontSourceSansPro,
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "18px",
          cursor: "pointer",
          textDecoration: "none",
        },
      },
    },
  };
};
