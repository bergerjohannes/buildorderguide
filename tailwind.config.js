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
        },
        'danger': {
          dark: '#ef4444',
          light: '#fb7185'
        },
        'highlight': {
          dark: '#f59e0b',
          light: '#fde047'
        }
      }
    },
  },
  plugins: []
}