/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.css',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'secondary-foreground': 'var(--secondary-foreground)',
        'foreground-hover': 'var(--foreground-hover)',
        accent: 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'accent-background': 'var(--accent-background)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        card: 'var(--card)',
        'card-background-1': 'var(--card-background-1)',
        'card-background-2': 'var(--card-background-2)',
        'card-background-3': 'var(--card-background-3)',
        'text-muted': 'var(--text-muted)',
      },
    },
  },
  plugins: [],
};