
import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
   'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        highlight: {
          DEFAULT: 'linear-gradient(104deg, rgba(130, 255, 173,0) 0.9%, rgba(130, 255, 173,1.25) 2.4%, rgba(130, 255, 173,0.5) 5.8%, rgba(130, 255, 173,0.1) 93%, rgba(130, 255, 173,0.7) 96%, rgba(130, 255, 1732,0) 98%), linear-gradient(183deg, rgba(130, 255, 173,0) 0%, rgba(130, 255, 173,0.3) 7.9%, rgba(130, 255, 173,0) 15%)',
        },
      },
      textShadow: {
        'custom': '2px 2px 2px black',
      }

    },
    variants: {
      extend: {
        textShadow: ['responsive', 'hover', 'focus'],
      },
    },
  },
  plugins: [ require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    // @ts-expect-error fef
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-custom': {
          textShadow: '2px 2px 2px black',
        },
      });
    },


 
],
} satisfies Config;
