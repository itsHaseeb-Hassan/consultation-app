/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "heroSection":"url('/images/Group 5.png')",
        "curatedDoctor":"url('/images/Frame.png')",
        "DownloadApp":"url('/images/Group 3.png')"
      },
    },
  },
  plugins: [],
};
