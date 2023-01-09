const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(204);
    res.end();
});

app.listen(3001, () => {
    console.info('Listening');
})