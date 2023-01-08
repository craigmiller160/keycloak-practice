import React from 'react';
import ReactDOM from 'react-dom/client';
import {Login} from "./Login.jsx";
import {keycloakInit} from "./keycloakInit";
import {UserInfo} from "./UserInfo";

const root = ReactDOM.createRoot(document.querySelector('#root'));

keycloakInit((tokenContainer) => {
    root.render(
        <div>
            <h1>KeyCloak Test</h1>
            <UserInfo tokenContainer={tokenContainer} />
        </div>
    );
});

