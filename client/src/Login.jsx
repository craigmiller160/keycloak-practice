import Keycloak from "keycloak-js";
import {useEffect} from "react";

const initOptions = {
    url: 'http://127.0.0.1:8080/', realm: 'practice', clientId: 'practice-app', onLoad: 'login-required'
}

const keycloak = Keycloak(initOptions);

export const Login = () => {
    // useEffect(() => {
    //     keycloak.init({ onLoad: initOptions.onLoad })
    // }, []);
    const login = () => {
        // console.log('Clicked', keycloak.login);
        // keycloak.login();
        keycloak.init({ onLoad: initOptions.onLoad });
    }

    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    )
}