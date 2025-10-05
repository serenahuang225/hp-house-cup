/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base parchment colors
        parchment: {
          50: "#fef9f0",
          100: "#fdf2e1",
          200: "#fbe4c3",
          300: "#f8d5a5",
          400: "#f5c687",
          500: "#ddb88b", // main parchment
          600: "#c4a06f",
          700: "#ab8853",
          800: "#927037",
          900: "#79581b",
        },
        // Ink and text colors
        ink: {
          50: "#f5f3f0",
          100: "#ebe7e1",
          200: "#d7cfc3",
          300: "#c3b7a5",
          400: "#af9f87",
          500: "#9b8769",
          600: "#7d6e54",
          700: "#5f553f",
          800: "#413c2a",
          900: "#33230f", // main ink
        },
        // Magical accent colors
        gold: {
          50: "#fffdf0",
          100: "#fffbe1",
          200: "#fff7c3",
          300: "#fff3a5",
          400: "#ffef87",
          500: "#ffeb69",
          600: "#e6d45f",
          700: "#ccbd55",
          800: "#b3a64b",
          900: "#998f41",
        },
        // Warm magical colors
        amber: {
          50: "#fffbeb",
          100: "#fff7d6",
          200: "#ffefad",
          300: "#ffe784",
          400: "#ffdf5b",
          500: "#ffd732",
          600: "#e6c12d",
          700: "#ccab28",
          800: "#b39523",
          900: "#997f1e",
        },
        // House colors with magical warmth
        gryffindor: {
          50: "#fef2f2",
          100: "#fde5e5",
          200: "#fbcaca",
          300: "#f9afaf",
          400: "#f79494",
          500: "#f57979",
          600: "#dd6d6d",
          700: "#c56161",
          800: "#ad5555",
          900: "#954949",
        },
        slytherin: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        ravenclaw: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        hufflepuff: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
      },
      boxShadow: {
        'magical': '0 0 20px rgba(255, 235, 105, 0.3), 0 0 40px rgba(255, 235, 105, 0.1)',
        'parchment': '0 4px 6px -1px rgba(51, 35, 15, 0.1), 0 2px 4px -1px rgba(51, 35, 15, 0.06)',
        'glow': '0 0 15px rgba(255, 215, 50, 0.4)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 215, 50, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 215, 50, 0.6), 0 0 30px rgba(255, 215, 50, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(0px)' }, // edit if wanted
        },
      },
    },
  },
  plugins: [],
}

