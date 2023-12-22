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
        // mediumblue: "#5215ea",
        mediumblue: "#fff",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        }
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "20px",
        "8xs": "5px",
        "3xs": "10px",
        "13xl": "32px",
        "10xs-4": "2.4px",
        "12xl-5": "31.5px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      }
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
  plugins: [require("tailwindcss-animate")],
};
