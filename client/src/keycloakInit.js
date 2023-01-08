import Keycloak from "keycloak-js";

const initOptions = {
    url: 'http://127.0.0.1:8080/', realm: 'my-realm', clientId: 'test-client', onLoad: 'login-required'
}

const keycloak = new Keycloak(initOptions);
class TokenContainer {
    token = "";
}

export const keycloakInit = (onComplete) => {
    const container = new TokenContainer();
    keycloak.init({ onLoad: initOptions.onLoad })
        .then((res) => {
            if (res) {
                container.token = keycloak.token;
                onComplete(container);
            } else {
                alert('Login failed');
            }
        })
        .catch((ex) => {
            console.error(ex);
            alert('Error with login');
        });

    setInterval(() => {
        console.log('UPDATING TOKEN');
        keycloak.updateToken(70)
            .then((res) => {
                if (res) {
                    container.token = keycloak.token;
                } else {
                    alert('Refresh failed')
                }
            })
            .catch((ex) => {
                console.error(ex);
                alert('Error with refresh');
            })
    }, 60_000)
};