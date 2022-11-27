/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        Dreamcatcher: "url('../img/dreamcatcher.jpg')",
        DreamcatcherDesktop: "url('../img/dreamcatcherDesktop.jfif')",
        new_york: "url('../img/palladiumTimesSquare.jpg')",
        reading: "url('../img/santanderArena.jpg')",
        louisville: "url('../img/oldForestersParistownHall.jfif')",
        chicago: "url('../img/radiusChicago.jfif')",
        minneapolis: "url('../img/skywayTheater.jpg')",
        denver: "url('../img/fillmoreAuditorium.jpg')",
        san_francisco: "url('../img/theMidway.jpg')",
        los_angeles: "url('../img/theWiltern.jpg')",
        mexico: "url('../img/auditorioBB.jfif')",
        berlin: "url('../img/vertiMusicHall.jfif')",
        tilburg: "url('../img/013Netherland.jpg')",
        warsaw: "url('../img/palladiumPoland.jpg')",
        london: "url('../img/o2AcademyBrixton.jpg')",
        paris: "url('../img/leZenith.jpeg')",
        fr_concert: "url('../img/dc-fr-concert.jpg')",
        ny_concert: "url('../img/dc-ny-concert.jpg')",
        uk_concert: "url('../img/dc-uk-concert.jpg')",
        mx_concert: "url('../img/dc-mx-concert.jpg')",
        gr_concert: "url('../img/dc-gr-concert.jpg')",
        br_concert: "url('../img/dc-berlin-concert.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#3D0000',
        secondary: '#CC2D4A',
        terciary: '#8D9EFF',
        dark: '#0F0E0E',
      }),
      textColor: {
        primary: '#950101',
        secondary: '#3D0000',
        terciary: '#8D9EFF',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      borderColor: {
        primary: '#3D0000',
      },
      colors: {
        custom: {
          cameo: '#950101',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }), require('tailwind-scrollbar-hide')],
};
