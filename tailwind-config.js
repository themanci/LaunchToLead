tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#064e3b', /* Emerald 900 */
                    secondary: '#14b8a6', /* Teal 500 */
                    accent: '#a3e635', /* Lime 400 */
                    light: '#ecfdf5', /* Emerald 50 */
                    surface: '#ffffff'
                },

            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(6, 78, 59, 0.1)',
                'card': '0 10px 40px -10px rgba(6, 78, 59, 0.15)',
                'fresh': '0 0 20px rgba(20, 184, 166, 0.25)'
            },
            backgroundImage: {
                'dots': 'radial-gradient(#14b8a6 1px, transparent 1px)',
            }
        }
    }
}