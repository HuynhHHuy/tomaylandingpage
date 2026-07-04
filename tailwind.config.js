/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // 1. Màu Nền & Nền tảng (Kem Mây)
                "background": "#F7F3EC",
                "surface": "#F7F3EC",
                "surface-bright": "#FDFBF7",

                // 2. Màu Chính - Nữ tính & Mềm mại (Be Ấm)
                "surface-container": "#E8D9C1",
                "surface-container-low": "#F2E8D8",
                "surface-variant": "#E8D9C1",
                "outline-variant": "#E8D9C1",
                "tertiary-container": "#E8D9C1",

                // 3. Màu Nhấn - Thanh lịch & Đọc chữ (Nâu Cacao)
                "primary": "#6B4E3D",
                "on-background": "#513A2D", // Nâu đậm hơn chút để dễ đọc
                "on-surface": "#6B4E3D",
                "on-surface-variant": "#6B4E3D",
                "on-primary-container": "#6B4E3D",

                // 4. Màu Chính - Thiên nhiên & Gọi hành động (Xanh Thảo Mộc)
                "primary-container": "#A6B49A",
                "tertiary": "#A6B49A",
                "tertiary-fixed": "#A6B49A",
                "outline": "#A6B49A",

                // 5. Màu Nhấn - Ấm áp & Điểm xuyết (Đất Nung)
                "secondary": "#C97A61",
                "secondary-fixed": "#C97A61",
                "secondary-container": "#E1A18D",

                // Màu Text đảo ngược (Trắng)
                "on-primary": "#FFFFFF",
                "on-secondary": "#FFFFFF",
                "on-tertiary": "#FFFFFF",

                // Giữ lại các biến phụ hệ thống (System fallback)
                "error": "#ba1a1a",
                "on-error": "#ffffff",
                "error-container": "#ffdad6",
                "on-error-container": "#93000a",
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
                "body-md": ["Quicksand", "sans-serif"],
                "headline-sm": ["Playfair Display", "serif"],
                "headline-lg-mobile": ["Playfair Display", "serif"],
                "body-lg": ["Quicksand", "sans-serif"],
                "label-md": ["Quicksand", "sans-serif"],
                "headline-md": ["Playfair Display", "serif"],
                "display-lg": ["Playfair Display", "serif"],
                "headline-lg": ["Playfair Display", "serif"]
            },
            fontSize: {
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "500" }],
                "display-lg-mobile": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "600" }],
                "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "700" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "500" }],
                "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "600" }],
                "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "600" }],
                "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "600" }]
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries')
    ],
}