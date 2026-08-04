/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#000038',
        'primary-blue': '#0000A5',
        'accent-blue': '#1D4ED8',
        'text-gray': '#666666',
        'text-light': '#595959',
        'border-gray': '#E0E5F0',
        'bg-panel': '#F5F7FC',
        'bg-white': '#FFFFFF',
        'status-normal': '#22C55E',
        'status-caution': '#F1A11D',
        'status-danger': '#E84B55',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Noto Sans KR',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        // rem 기반: html의 font-size(기본 17px / 큰 글자 모드 20px)에 비례해 전체가 함께 커집니다.
        caption: ['0.8125rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        'card-title': ['1.1875rem', { lineHeight: '1.625rem', fontWeight: '700' }],
        kpi: ['2.125rem', { lineHeight: '2.5rem', fontWeight: '800' }],
        'page-title': ['1.625rem', { lineHeight: '2.125rem', fontWeight: '800' }],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(0, 0, 56, 0.04)',
        nav: '0 -2px 12px 0 rgba(0, 0, 56, 0.08)',
      },
    },
  },
  plugins: [],
}
