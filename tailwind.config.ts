import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
  // plugins: [ require('@tailwindcss/typography'),
  //   require('flowbite/plugin'),
  //   // @ts-expect-error fef
  //   function ({ addUtilities }) {
  //     addUtilities({
  //       '.text-shadow-custom': {
  //         textShadow: '2px 2px 2px black',
  //       },
  //     });
  //   },


 
// ],
} satisfies Config;
