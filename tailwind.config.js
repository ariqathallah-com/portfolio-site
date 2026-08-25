/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FFFFFF',
        ink: '#111111',
        muted: '#666666',
        line: '#E5E5E5',
        accent: '#002FA7',
      },
      fontFamily: {
        body: ['var(--font-body)'],
      },
      maxWidth: {
        content: '38rem',
      },
    },
  },
  plugins: [],
};
