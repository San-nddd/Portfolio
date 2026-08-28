/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0D0D',
        paper: '#F6F5F2',
        accent: ' #2c1bc7',
        'accent-soft': '#3a30ff',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      transitionProperty: {
        colors: 'color, background-color, border-color, fill, stroke, opacity, box-shadow, transform',
      },
    },
  },
  plugins: [],
}
