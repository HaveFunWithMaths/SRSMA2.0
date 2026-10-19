/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B14',
          900: '#0F172A',
          850: '#152033',
          800: '#1E293B',
          750: '#1A273D',
          700: '#334155',
          600: '#475569',
        },
        gold: {
          100: '#FEF9C3',
          200: '#FEF3C7',
          300: '#FDE68A',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
        },
        trust: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        blue: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#6366F1',
          500: '#2A4CE2',
          600: '#1C39BB', // Official Persian Blue (#1C39BB)
          700: '#162E99',
          800: '#12247A',
          900: '#0E1B5B',
          950: '#080F33',
        },
        persian: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#6366F1',
          500: '#2A4CE2',
          600: '#1C39BB', // Official Persian Blue (#1C39BB)
          700: '#162E99',
          800: '#12247A',
          900: '#0E1B5B',
          950: '#080F33',
        },
        prussian: {
          50: '#F0F7FA',
          100: '#DCECF2',
          200: '#B8D9E6',
          300: '#85BFD4',
          400: '#469DBF',
          500: '#1D789E',
          600: '#0B5579',
          700: '#003153', // Official Prussian Blue (#003153)
          800: '#002540',
          900: '#001A2D',
          950: '#000F1C',
        },
        cobalt: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#6366F1',
          500: '#2A4CE2',
          600: '#1C39BB',
          700: '#162E99',
          800: '#12247A',
          900: '#0E1B5B',
          950: '#080F33',
        },
        sunset: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-champagne': '0 0 30px -5px rgba(251, 191, 36, 0.35)',
        'glow-persian': '0 0 25px -5px rgba(28, 57, 187, 0.35)',
        'glow-cobalt': '0 0 25px -5px rgba(28, 57, 187, 0.35)',
        'glow-sunset': '0 0 25px -5px rgba(249, 115, 22, 0.35)',
        'glow-navy': '0 10px 30px -10px rgba(15, 23, 42, 0.5)',
        'glass-edge': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'card-elevated': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
