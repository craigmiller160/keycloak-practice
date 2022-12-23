const react = require('@vitejs/plugin-react');
const path = require('path');

export default {
    root: path.join(process.cwd(), 'src'),
    server: {
        port: 3003
    },
    plugins: [
        react()
    ]
}