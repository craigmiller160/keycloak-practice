const react = require('@vitejs/plugin-react');
const path = require('path');

export default {
    root: path.join(process.cwd(), 'src'),
    server: {
        port: 3003,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
                secure: false,
                rewrite: (thePath) => thePath.replace(/^\/api/, '')
            },
            '/cookies': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
                rewrite: (thePath) => thePath.replace(/^\/cookies/, '')
            }
        }
    },
    plugins: [
        react()
    ]
}