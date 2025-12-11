module.exports = {
  theme: {
    extend: {
      keyframes: {
        "rotate-rev": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-rev": "rotate-rev 18s linear infinite",
      },
    },
  },
};
