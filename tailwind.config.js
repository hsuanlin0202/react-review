const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      lg: "1024px",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "h-fill": "auto 100%",
    },
    inset: {
      auto: "auto",
      "-1": "-0.25rem",
      "-2": "-0.5rem",
      "-3": "-0.75rem",
      "-4": "-1rem",
      "-5": "-1.25rem",
      "-8": "-2rem",
      "-14": "-3.5rem",
      "-29": "-7.25rem",
      0: "0rem",
      0.5: "0.125rem",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      14: "3.5rem",
      15: "3.75rem",
      21: "5.25rem",
      40: "10rem",
      44: "11rem",
      64: "16rem",
      "1/2": "50%",
      "1/4": "25%",
      "3/4": "75%",
      "1/2-1": "49%",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: {
        DEFAULT: "#000",
        "1/10": "rgba(0,0,0,0.1)",
        "2/10": "rgba(0,0,0,0.2)",
        "3/10": "rgba(0,0,0,0.3)",
        "4/10": "rgba(0,0,0,0.4)",
        "5/10": "rgba(0,0,0,0.5)",
        "6/10": "rgba(0,0,0,0.6)",
        "7/10": "rgba(0,0,0,0.7)",
        "8/10": "rgba(0,0,0,0.8)",
        "9/10": "rgba(0,0,0,0.9)",
      },
      gray: colors.gray,
      green: colors.green,
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
    },
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#f8ac59",
        },
        gray: {
          disabled: "#fafafa",
          lightest: "#f8f8f8",
          lighter: "#f2f2f2",
          lighten: "#efefef",
          light: "#e5e5e5",
          normal: "#cdcdcd",
          disable: "#a8a8a8",
          dark: "#999999",
          darker: "#666666",
          darkest: "#333333",
          frame: "#aeb3b6",
        },
        red: {
          error: "#dc2626",
          dark: "#a81818",
          button: "#ed5664",
        },
        green: {
          button: "#18b293",
          notify: "#56b934",
        },
        blue: {
          system: "#2664cb",
          button: "#1d83c6",
        },
        teal: { button: "#24c5c6" },
        orange: {
          button: "#f8ab59",
        },
      },
      zIndex: {
        100: "100",
      },
      margin: { 7: "1.75rem", 14: "3.5rem" },
      padding: {
        "9/16": "46.25%",
        "1/3-3": "30.33%",
        "04": "0.4rem",
        "06": "0.6rem",
      },
      fontSize: {
        "7xl": "4.5rem",
        carLevel: "10rem",
      },
      lineHeight: { carLevel: "0.8", 12: "3rem" },
      borderWidth: {
        3: "3px",
        5: "5px",
        6: "6px",
        10: "10px",
      },
      maxWidth: {
        6: "1.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        42: "10.5rem",
        64: "16rem",
        76: "19rem",
        80: "20rem",
        90: "22.5rem",
        106: "26.5rem",
        152: "38rem",
        160: "40rem",
        188: "47rem",
        240: "60rem",
        250: "62.5rem",
        260: "65rem",
        284: "71rem",
        320: "80rem",
        360: "90rem",
        "1/2": "50%",
      },
      minWidth: {
        6: "1.5rem",
        20: "5rem",
        24: "6rem",
        25: "6.5rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        60: "14.5rem",
        64: "16rem",
        96: "24rem",
        116: "29rem",
        128: "32rem",
        160: "40rem",
        228: "57rem",
        240: "60rem",
        250: "62.5rem",
        260: "65rem",
        284: "71rem",
        320: "80rem",
        360: "90rem",
        "5/12-1": " 45%",
      },
      minHeight: {
        10: "2.5rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        56: "14rem",
        68: "17rem",
        80: "20rem",
        128: "32rem",
        "70p": "70%",
      },
      maxHeight: {
        0: "0rem",
        62: "15.5rem",
        80: "20rem",
        104: "26rem",
        128: "32rem",
        160: "40rem",
        208: "52rem",
        vh90: "90vh",
        "fixed-mobile": "calc(100vh - 56px)",
      },
      height: {
        14: "3.5rem",
        15: "3.75rem",
        18: "4.5rem",
        21: "5.25rem",
        22: "5.5rem",
        28: "7rem",
        36: "9rem",
        42: "10.5rem",
        44: "11rem",
        50: "12.5rem",
        52: "13rem",
        60: "14.5rem",
        68: "17rem",
        72: "18rem",
        80: "20rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        112: "28rem",
        116: "29rem",
        160: "40rem",
        "25p": "25%",
        "30p": "30%",
        "60p": "60%",
        "70p": "70%",
        "75p": "75%",
        "55vh": "55vh",
        "70vh": "70vh",
      },
      width: {
        18: "4.5rem",
        30: "7.5rem",
        37: "9.25rem",
        42: "10.5rem",
        50: "12.5rem",
        76: "19rem",
        80: "20rem",
        84: "21rem",
        88: "22rem",
        94: "23.25rem",
        96: "24rem",
        112: "28rem",
        116: "29rem",
        128: "32rem",
        136: "34rem",
        160: "40rem",
        228: "57rem",
        284: "71rem",
        fit: "fit-content",
      },
      backgroundSize: { "150p": "150%" },
      boxShadow: {
        up: "0 -2px 4px 1px rgba(0, 0, 0, 0.2)",
        head: "0 2px 4px 0 rgba(0, 0, 0, 0.5)",
      },
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
