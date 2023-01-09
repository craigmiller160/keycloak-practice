const express = require('express');
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

const createCookie = () => {
    return ['my-cookie', 'HelloWorld', {
        maxAge: '1000000',
        path: '/cookies/endpoint1'
    }];
}

app.get('/create', (req, res) => {
    const [name, value, options] = createCookie();
    res.cookie(name, value, options);
    res.status(204);
    res.end();
});

app.get('/endpoint1', (req, res) => {
    Object.entries(req.cookies)
        .forEach(([key, value]) => console.log('COOKIE', key, value));
    res.status(204);
    res.end();
})

app.get('/endpoint2', (req, res) => {
    Object.entries(req.cookies)
        .forEach(([key, value]) => console.log('COOKIE', key, value));
    res.status(204);
    res.end();
})

app.listen(3001, () => {
    console.info('Listening');
})