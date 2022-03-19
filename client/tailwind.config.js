 module.exports = {
    //content: ["./src/**/*.{html,js}"],
    purge: {
        content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // /dist/
        options: {
            safelist: []
        }
    },
    theme: {
        extend: {},
        fontFamily: {
            'consolas': 'Consolas, monospace',
            'source-code': 'Source Code Pro, monospace',
            'source-sans': 'Source Sans Pro, sans-serif',
            'roboto': 'Roboto, sans-serif',
            'roboto-mono': 'Roboto Mono, monospace',
            'open-sans': 'Open Sans, sans-serif',
        },
    },
    plugins: [],
}
