module.exports = {
    future: {
        hoverOnlyWhenSupported: true,
    },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                'main': {
                    dark: 'var(--main-dark)',
                    light: 'var(--main-light)',
                },
                'primary': {
                    dark: 'var(--primary-dark)',
                    light: 'var(--primary-light)',
                },
                'secondary': {
                    dark: 'var(--secondary-dark)',
                    light: 'var(--secondary-light)',
                },
                'danger': {
                    dark: 'var(--danger-dark)',
                    light: 'var(--danger-light)',
                },
                'highlight': {
                    dark: 'var(--highlight-dark)',
                    light: 'var(--highlight-light)',
                },
                'surface': {
                    dark: 'var(--surface-dark)',
                    light: 'var(--surface-light)',
                },
                'border': {
                    dark: 'var(--border-dark)',
                    light: 'var(--border-light)',
                },
                'accent': {
                    dark: 'var(--accent-dark)',
                    // light: 'var(--accent-light)',
                },
            },
            minWidth: {
                'sm': '2.5rem',
                'md': '8rem',
                'lg': '30rem'
            },
        },
    },
    plugins: []
}
