/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor:{
        whiteBioWaste: "#EAE2DE",
        blueBioWaste: "#9DC4C4",
        greenBioWaste: "#81e28b"
      },
      colors:{
        GreenRecycle: "#006838",
        blueBioWaste: "#53AAFA",
      },
      borderColor:{
        grayBioWaste: "#A8A8A8"
      }
    },
  },
  plugins: [],
  
}

