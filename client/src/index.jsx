import React from 'react';
import ReactDOM from 'react-dom/client';
import {Login} from "./Login.jsx";
import {keycloakInit} from "./keycloakInit";
import {UserInfo} from "./UserInfo";
import {Root} from "./Root";

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <Root />
);

