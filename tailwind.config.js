/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        primary: '#0500FF',
        10: '#EDEFFB'
      },
      black: '#1C1C1C',
      white: '#FFFFFF',
      gray: {
        '00': '#F0F0F0',
        '05': '#F5F5F5',
        10: '#DFDFDF',
        20: '#9E9E9E'
      }
    },
    extend: {
      fontSize: {
        h1: ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        h2: ['1rem', { lineHeight: '1.4', fontWeight: '500' }],
        h3: ['1rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      boxShadow: {
        '01': '0px 1px 2px 0px rgba(0, 0, 0, 0.2)',
        '02': '0px 2px 4px 0px rgba(0, 0, 0, 0.2)',
        small: '0px 2px 8px 0px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
