import Keycloak from "keycloak-js";

const initOptions = {
    url: 'http://127.0.0.1:8080/', realm: 'my-realm', clientId: 'test-client', onLoad: 'login-required'
}

const keycloak = new Keycloak(initOptions);

export const keycloakInit = (onComplete) => {
    keycloak.init({ onLoad: initOptions.onLoad })
        .then((res) => {
            if (res) {
                onComplete(keycloak.token);
            } else {
                alert('Login failed');
            }
        })
        .catch((ex) => {
            console.error(ex);
            alert('Error with login');
        });
};