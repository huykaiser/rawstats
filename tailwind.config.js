/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          "100": "#414141",
          "200": "#343b4f",
          "300": "#303237",
        },
        lightsteelblue: {
          "100": "#aeb9e1",
          "200": "rgba(174, 185, 225, 0.25)",
        },
        white: "#fff",
        gainsboro: "#d9d9d9",
        mediumblue: "#5215ea",
        mediumslateblue: "#6c72ff",
        darkgray: "#a4a4a4",
        crimson: {
          "100": "#e03251",
          "200": "rgba(224, 50, 81, 0.25)",
        },
        orange: "rgba(255, 176, 22, 0.25)",
        slateblue: "rgba(87, 66, 169, 0.25)",
        mediumseagreen: {
          "100": "#14ca74",
          "200": "rgba(20, 202, 116, 0.25)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        "3xs": "10px",
        "13xl": "32px",
        "10xs-4": "2.4px",
        "12xl-5": "31.5px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xs": "8px",
      xs: "12px",
      "8xs": "5px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
