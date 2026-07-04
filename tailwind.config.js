/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "tertiary-fixed": "#d8e7d4",
                "on-error-container": "#93000a",
                "primary": "#173124",
                "outline-variant": "#c2c8c2",
                "on-secondary-fixed-variant": "#5d4034",
                "surface-variant": "#e4e2dd",
                "on-tertiary-fixed": "#131e13",
                "on-background": "#1b1c19",
                "error": "#ba1a1a",
                "tertiary": "#232f22",
                "error-container": "#ffdad6",
                "on-primary-fixed-variant": "#324c3e",
                "on-tertiary": "#ffffff",
                "surface-bright": "#fbf9f4",
                "inverse-surface": "#30312e",
                "outline": "#727973",
                "tertiary-container": "#394538",
                "background": "#fbf9f4",
                "on-secondary-fixed": "#2c160c",
                "surface-container-highest": "#e4e2dd",
                "surface": "#fbf9f4",
                "on-surface-variant": "#424844",
                "primary-fixed-dim": "#b0cdbb",
                "on-error": "#ffffff",
                "on-tertiary-container": "#a4b2a1",
                "surface-container-low": "#f5f3ee",
                "surface-dim": "#dbdad5",
                "surface-container-lowest": "#ffffff",
                "secondary-container": "#ffd4c4",
                "on-surface": "#1b1c19",
                "secondary-fixed": "#ffdbce",
                "on-primary": "#ffffff",
                "surface-tint": "#496455",
                "primary-fixed": "#ccead6",
                "secondary": "#77574b",
                "secondary-fixed-dim": "#e7beae",
                "on-secondary-container": "#7a594d",
                "inverse-on-surface": "#f2f1ec",
                "on-tertiary-fixed-variant": "#3e4a3c",
                "inverse-primary": "#b0cdbb",
                "surface-container": "#f0eee9",
                "on-primary-fixed": "#062014",
                "on-secondary": "#ffffff",
                "surface-container-high": "#eae8e3",
                "tertiary-fixed-dim": "#bccab9",
                "primary-container": "#2d4739",
                "on-primary-container": "#98b5a3"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            spacing: {
                "unit": "8px",
                "margin-mobile": "20px",
                "margin-desktop": "64px",
                "container-max": "1280px",
                "gutter": "24px"
            },
            fontFamily: {
                "body-lg": ["Montserrat", "sans-serif"],
                "display-lg-mobile": ["EB Garamond", "serif"],
                "label-md": ["Montserrat", "sans-serif"],
                "body-md": ["Montserrat", "sans-serif"],
                "headline-lg": ["EB Garamond", "serif"],
                "headline-md": ["EB Garamond", "serif"],
                "display-lg": ["EB Garamond", "serif"]
            },
            fontSize: {
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                "display-lg-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
                "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "500" }],
                "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "500" }],
                "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "600" }]
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}