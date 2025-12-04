import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";
const plugin = require('tailwindcss/plugin');

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        azolla_purple: '#4820e4',
        azolla_green: '#00d959',
        azolla_black: '#000508',
        azolla_red: '#ff8585',
        azolla_blue: '#265cff',
        light_gray: '#eeebf3',
        dark_gray: '#434346',
        text_black: '#414141',
        promise_bg: '#F4F4F4',
        promise_gray: '#f1eff6',
        footer_newsletter_bg_black: '#1F2332',
        energy_consumption_bg: '#282a2d',
        social_media_logo_bg: '#555A68',
        black_shade_2: '#1B1B1B'
      },
      fontSize: {
        "responsive-sm": ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
        "responsive-md": ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
        "responsive-lg": ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
        "responsive-xl": ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
        "responsive-2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
        "responsive-3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
        "responsive-4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
        "responsive-5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
        "responsive-6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
      },
      gap: {
        'responsive-3xs': 'clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)',
        'responsive-2xs': 'clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)',
        'responsive-xs': 'clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)',
        'responsive-sm': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
        'responsive-md': 'clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)',
        'responsive-lg': 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)',
        'responsive-xl': 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
        'responsive-2xl': 'clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)',
        'responsive-3xl': 'clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)',
      },
      space: {
        'responsive-3xs': 'clamp(0.31rem, calc(0.31rem + 0.00vw), 0.31rem)',
        'responsive-2xs': 'clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem)',
        'responsive-xs': 'clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem)',
        'responsive-sm': 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
        'responsive-md': 'clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem)',
        'responsive-lg': 'clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem)',
        'responsive-xl': 'clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem)',
        'responsive-2xl': 'clamp(4.50rem, calc(4.33rem + 0.87vw), 5.00rem)',
        'responsive-3xl': 'clamp(6.75rem, calc(6.49rem + 1.30vw), 7.50rem)',
      },
      screens: {
        'xxs': '320px',
        'xs': '475px',
      },
      boxShadow: {
        sml: "0px 0px 6px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [nextui(), plugin(function ({ addUtilities }: any) {
    addUtilities({
      '.arrow-hide': {
        '&::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
        '&::-webkit-outer-spin-button': {
          '-webkit-appearance': 'none',
          margin: 0,
        },
      },
    });
  }),]
}
export default config
