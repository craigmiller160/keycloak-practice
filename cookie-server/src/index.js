const express = require('express');

const app = express();

const createCookie = () => {
    const value = 'HelloWorld; Max-Age=1000000'
    return ['my-cookie', value];
}

app.get('/', (req, res) => {
    const [name, value] = createCookie();
    res.cookie(name, value);
    res.status(204);
    res.end();
});

app.get('/endpoint1', (req, res) => {
    req.cookies.forEach((cookie) => console.log('COOKIE', cookie));
    res.status(204);
    res.end();
})

app.get('/endpoint2', (req, res) => {
    req.cookies.forEach((cookie) => console.log('COOKIE', cookie));
    res.status(204);
    res.end();
})

app.listen(3001, () => {
    console.info('Listening');
})