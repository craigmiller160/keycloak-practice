import React from 'react';
import ReactDOM from 'react-dom/client';
import {Login} from "./Login.jsx";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <div>
        <h1>KeyCloak Test</h1>
        <Login />
    </div>
);