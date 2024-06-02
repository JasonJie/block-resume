// eslint-disable-next-line no-undef
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            minHeight: {
                "screen-100": "100vh",
            },
            height: {
                "screen-100": "100vh",
                "screen-50": "50vh",
            },
            width: {
                "screen-100": "50vw",
                "screen-50": "50vw",
                112: "28rem",
            },
        },
    },
    plugins: [],
};
