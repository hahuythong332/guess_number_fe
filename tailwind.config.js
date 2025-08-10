/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}", "./node_modules/flowbite/**/*.js"],
  safelist: ['w-[400px]'],
  theme: {
    fontFamily: {
      'sans': ['Inter'],
    },
    extend: {
      width: {
        1120: '1120px',
        736: '736px',
        544: '544px',
      },
      borderRadius: {
        5: '5px'
      },
      fontSize: {
        10: '10px',
        13: '13px',
        18: '18px',
        26: '26px',
        28: '28px',
        38: '38px',
        48: '48px',
      },
      lineHeight: {
        22: '22.4px',
        25: '25.6px',
        31: '31.6px',
        33: '33.6px',
        57: '57.6px',
      },
      colors: {
        'gray': {
          '1a': '#1a1a1a',
          'ed': '#EDEDED',
          'a4': '#A4A4A4',
          'f3f': '#F3F6F9',
          'f9': '#F9F9F9',
          71: '#717171',
          'eef': '#EEF2F5',
          'ddd': '#DDDDDD',
          '51': '#515151',
          750: '#B5CEE6',
          'b4': '#B4B4B4',
        },
        'org': {
          500: '#E59316',
          'd68': '#D68100',
        },
        'blue': {
          350: '#A8C0E3',
          397: '#3976D2',
          500: '#007DD8',
          '246': '#2463EB',
          'eef': '#EEF4FC',
          'e0e': '#E0EDFA',
          '2c4': '#2C4161',
          '072': '#072A5F',
          '105': '#1054BA',
          'f3f': '#F3F6F9'
        },
        'green': {
          150: '#A1CECB',
          'dbf': '#DBF3F2',
          '39d': '#39D2C9',
          '39d26d': '#39D26D',
          550: '#17B2A9',
        },
        'red': {
          'ff4': '#FF4B36',
          'ec0': '#EC0000',
        }
      },
      boxShadow: {
        'signup': '0px 0px 25px 0px #0000001F',
        'sort': '0px 0px 8px 0px #0000001F',
      }
    },
  },
}

