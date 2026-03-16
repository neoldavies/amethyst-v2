/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './index.html',
        './game.html',
        './join-the-team.html',
        './the-small-room.html',
    ],
    theme: {
        extend: {
            colors: {
                amethyst: {
                    50:  '#fcfaff',
                    100: '#f5f0ff',
                    200: '#ece3ff',
                    300: '#d9c7ff',
                    400: '#b899ff',
                    500: '#9b6bff',
                    600: '#843dff',
                    700: '#7329ef',
                    800: '#5f22c6',
                    900: '#4f1da4',
                    950: '#0f0a1f',
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans:  ['Inter', 'system-ui', 'sans-serif'],
            }
        }
    }
}
