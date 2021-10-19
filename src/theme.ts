import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rubik";

const overrides = {
  colors: {
    orange: {
      100: "#FF9249",
      200: "#FF8737",
      300: "#FF7C24",
      400: "#FF7112",
      500: "#FF6600",
      600: "#ED5F00",
      700: "#DB5700",
      800: "#C85000",
      900: "#B64900",
    },
    primary: {
      orange: "orange.500",
      dark: "#2B2541",
      yellow: "#FED800",
      stone: "#F4F8FB",
      ice: "#F9FBFD",
      gray: "#7C788A",
      white: "#FFFFFF",
    },
    secondary: {
      orange: "orange.500",
      dark: "#2b2541",
      meadow: "#7FB069",
      gold: "#F49D37",
      sand: "#E6AA68",
      lake: "#3F88C5",
      dorian: "#F5F5F5",
    },
  },
  fonts: {
    rubik: "Rubik",
  },
  textStyles: {
    defaults: {
      lineHeight: "100%",
      fontFamily: "rubik",
    },
    h1: {
      fontSize: "36px",
      fontWeight: "700",
    },
    h2: {
      fontSize: "30px",
      fontWeight: "700",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "700",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "700",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "700",
    },
    subtitle1: {
      fontSize: "22px",
      fontWeight: "700",
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: "700",
    },
    subtitle3: {
      fontSize: "16px",
      fontWeight: "700",
    },
    subtitle4: {
      fontSize: "14px",
      fontWeight: "700",
    },
    subtitle5: {
      fontSize: "12px",
      fontWeight: "500",
    },

    body1: {
      fontSize: "16px",
      fontWeight: "400",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "400",
    },
    body3: {
      fontSize: "12px",
      fontWeight: "400",
    },
    body4: {
      fontSize: "10px",
      fontWeight: "400",
    },
    body5: {
      fontSize: "8px",
      fontWeight: "400",
    },
    section1: {
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: "400",
    },
    section2: {
      textTransform: "uppercase",
      fontSize: "10px",
      fontWeight: "400",
    },
  },

  components: {
    Button: {
      baseStyle: {
        borderRadius: "none",
      },
      sizes: {
        md: {
          px: 7,
          h: "60px",
          fontSize: "25px",
        },
        lg: {
          px: 1000,
          h: "70px",
          fontSize: "30px",
          borderRadius: "10px",
        },
      },
      variants: {
        primary: {
          bg: "orange.500",
          color: "#000",
        },
        secondary: {
          bg: "orange.500",
          color: "#000",
        },
        ghost: {
          bg: "transparent",
          border: "1px solid red",
        },
        primaryGhost: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "primary",
        },
        secondaryGhost: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "secondary",
          _hover: {
            color: "#fff",
            bg: "#BB1415",
          },
        },
      },
    },

    Heading: {
      baseStyle: {
        fontFamily: "Inter",
        fontWeight: "600",
      },
      sizes: {
        small: {
          fontSize: "20px",
        },
        medium: { fontSize: "25px" },
        large: { fontSize: "30px" },
      },
    },
  },
};
const customTheme2 = extendTheme(overrides);

export default customTheme2;
