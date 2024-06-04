/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(255,248,77,1) 0%, rgba(255,184,0,1) 100%)',
      },
      backgroundColor: {
        whiteBioWaste: "#FFFFFF",
        blueBioWaste: "#9DC4C4",
        greenBioWaste: "#81e28b",
        BlueHeader: "#3AA299",
        grayUser: "#F5F5F5",
        inputComment: "#D9D9D9",
        greenButton: "#6CF669"
      },
      colors: {
        GreenRecycle: "#006838",
        blueBioWaste: "#53AAFA",
        blueMainTtile: "#9DC4C4",
      },
      borderColor: {
        grayBioWaste: "#A8A8A8",
        grayTenue: "F5F5F5"
      }
    },
  },
  plugins: [],
}
