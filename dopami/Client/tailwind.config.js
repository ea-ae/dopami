 module.exports = {
    //content: ["./src/**/*.{html,js}"],
    purge: {
        content: ['./src/*.{html,js,jsx,ts,tsx}'], // /dist/
        options: {
            safelist: ['m-4']
        }
    },
    theme: {
        extend: {},
        fontFamily: {
            'lsans': 'Lora, Times, serif',
            'pdsans': 'Playfair Display, Times, serif',
            'ssans': 'Source Serif Pro, Times, serif'
        },
    },
    plugins: [],
}
