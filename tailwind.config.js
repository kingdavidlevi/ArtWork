/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // newblue: "#a7c7ec"
        newblue: ' #d0e6ff',
        iconblue: '#4893e4',
      },
      spacing: {
        45: '185px', // Add a custom spacing value for left
      },
      width: {
        100: '500px',
        150: '520px',
        200: '550px',
        250: '580px',
        260: '620px',
        280: '765px',
        270: '750px',
        300: '800px',
        305: '815px',
        310: '850px',
        315: '870px',
        120: '2000px',
        70: '260px',
        83: '380px',
        340: '1000px',
        350: '1000px',
        400: '1235px',
        98: '450px',
        97: '420px',
        38: '152px',
        90: '350px',
        370: '1170px',
        18: '72px',
        53: '218px',
        110: '527px',
        75: '300px',
        99: '470px',
        101: '422px',
        86: '302px',
        265: '700px',
        22: '85px',
        34: '138px',
        130: '710px',
        82: '330px',
        255: '690px',
        256: '645px',
        '90%': '90%',
        '85%': '85%',
      },
      minWidth: {
        70: '260px',
        '90%': '90%',
      },
      borderWidth: {
        r: '0.1px',
      },

      screens: {
        md2: '890px',
      },

      top: {
        88: '340px',
        18: '75px',
        25: '90px',
      },

      height: {
        100: '500px',
        150: '520px',
        200: '550px',
        250: '580px',
        300: '950px',
        400: '1000px',
        120: '2000px',
        75: '400px',
        82: '390px',
        26: '104px',
        18: '75px',
        97: '420px',
        98: '450px',
        33: '145px',
        77: '324px',
        260: '620px',
        22: '82px',
        50: '180px',
        78: '370px',
        68: '350px',
        57: '280px',
        62: '320px',
        '90%': '90%',
        '80%': '80%',
        '85%': '85%',
      },

      fontWeight: {
        semi: '500px',
      },
      fontSize: {
        '12xl': '12rem',
      },

      margin: {
        100: '450px',
        22: '85px',
        30: '120px',
        18: '75px',
        23: '90px',
      },

      padding: {
        34: '135px',
        30: '110px',
      },
      scale: {
        101: '1.01', // Custom scale for a 1% increase
        103: '1.03', // Custom scale for a 3% increase
      },
    },
  },
  plugins: [],
};
