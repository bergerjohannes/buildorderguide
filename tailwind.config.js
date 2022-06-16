module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': {
          dark: '#134e4a',
          light: '#64748b'
        },
        'primary': {
          dark: '#0f172a',
          light: '#2dd4bf'
        },
        'secondary': {
          dark: '#cbd5e1',
          light: '#f1f5f9'
        }
      }
    },
  },
  plugins: []
}