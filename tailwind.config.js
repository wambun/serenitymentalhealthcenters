// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme');
const { colors: customColors } = require('./data/config/colors');

/** @type {import("tailwindcss").Config } */
module.exports = {
  content: [
    './node_modules/@shipixen/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx,css,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,css,mdx}',
    './components/**/*.{js,ts,jsx,tsx,css,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,css,mdx}',
    './demo/**/*.{js,ts,jsx,tsx,css,mdx}',
    './data/**/*.mdx',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontSize: {
        // HealthWell typography scale
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-xl': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.4' }],
        'heading-md': ['1.25rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      fontFamily: {
        sans: ['var(--font-space-default)', ...fontFamily.sans],
        display: ['var(--font-space-display)', ...fontFamily.sans],
        cursive: ['cursive'],
      },
      colors: {
        primary: {
          100: customColors.primary.lighter,
          200: customColors.primary.lighter,
          300: customColors.primary.light,
          400: customColors.primary.light,
          500: customColors.primary.main,
          600: customColors.primary.main,
          700: customColors.primary.dark,
          800: customColors.primary.dark,
          900: customColors.primary.darker,
        },
        secondary: {
          100: customColors.secondary.lighter,
          200: customColors.secondary.lighter,
          300: customColors.secondary.light,
          400: customColors.secondary.light,
          500: customColors.secondary.main,
          600: customColors.secondary.main,
          700: customColors.secondary.dark,
          800: customColors.secondary.dark,
          900: customColors.secondary.darker,
        },
        'accent-orange': {
          100: customColors.accent?.lighter || '#ffb366',
          200: customColors.accent?.lighter || '#ffb366',
          300: customColors.accent?.light || '#ffa64d',
          400: customColors.accent?.light || '#ffa64d',
          500: customColors.accent?.main || '#f29940',
          600: customColors.accent?.main || '#f29940',
          700: customColors.accent?.dark || '#d98533',
          800: customColors.accent?.dark || '#d98533',
          900: customColors.accent?.darker || '#bf7029',
        },
        neutral: customColors.neutral || {
          50: '#fafafa',
          100: '#f7f7f7',
          200: '#f4fbf6',
          300: '#e5e5e5',
          400: '#cccccc',
          500: '#999999',
          600: '#666666',
          700: '#333333',
          800: '#1a1a1a',
          900: '#000000',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: customColors.primary.dark,
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
            },
            h3: {
              fontWeight: '600',
            },
            code: {
              color: theme('colors.indigo.500'),
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
      screens: {
        '2xl': '1400px',
        'tall-sm': { raw: '(min-height: 640px)' },
        'tall-md': { raw: '(min-height: 768px)' },
        'tall-lg': { raw: '(min-height: 1024px)' },
        'tall-xl': { raw: '(min-height: 1280px)' },
        'tall-2xl': { raw: '(min-height: 1536px)' },
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        110: 110,
      },
      transitionDuration: {
        2000: '2000ms',
        3000: '3000ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        'rotate-left-to-right': {
          '0%': {
            transform: 'rotate(-35deg)',
          },

          '30%': {
            transform: 'rotate(-10deg)',
          },

          '50%': {
            transform: 'rotate(20deg)',
          },

          '60%': {
            transform: 'rotate(35deg)',
          },

          '70%': {
            transform: 'rotate(15deg)',
          },

          '80%': {
            transform: 'rotate(45deg)',
          },

          '90%': {
            transform: 'rotate(-10deg)',
          },

          '100%': {
            transform: 'rotate(-35deg)',
          },
        },
        tilt: {
          '0%,50%,to': {
            transform: 'rotate(0deg)',
          },

          '25%': {
            transform: 'rotate(.5deg)',
          },

          '75%': {
            transform: 'rotate(-.5deg)',
          },
        },
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      animation: {
        tilt: 'tilt 10s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'fade-in-down-snail': 'fade-in-down 5s ease-in forwards',
        'fade-in-down-slower': 'fade-in-down 1.2s ease-in-out forwards',
        'fade-in-down-slow': 'fade-in-down 1s ease-in-out forwards',
        'fade-in-down-normal': 'fade-in-down 0.8s ease-in-out forwards',
        'fade-in-down-fast': 'fade-in-down 0.6s ease-in-out forwards',
        'fade-in-down-faster': 'fade-in-down 0.4s ease-in-out forwards',
        'rotate-left-to-right': 'rotate-left-to-right 3s ease-in-out infinite',
        'fade-in-down-normal-delay':
          'fade-in-down 0.8s ease-in-out 2s forwards',
        marquee: '30s marquee linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
