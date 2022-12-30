import Keycloak from "keycloak-js";
import {useEffect} from "react";

const initOptions = {
    url: 'http://127.0.0.1:8080/', realm: 'my-realm', clientId: 'test-client', onLoad: 'login-required'
}

const keycloak = Keycloak(initOptions);

/*
setInterval(() => {
    keycloak.updateToken(70).then((refreshed) => {
      if (refreshed) {
        Vue.$log.info('Token refreshed' + refreshed);
      } else {
        Vue.$log.warn('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      Vue.$log.error('Failed to refresh token');
    });
  }, 6000)
 */

const decodeToken = (token) => {
    const core = token.split('.')[1];
    console.log(JSON.stringify(JSON.parse(atob(core)), null, 2));
}

export const Login = () => {
    useEffect(() => {
        console.log('TOKEN', keycloak.token);
        keycloak.init({ onLoad: initOptions.onLoad })
            .then((res) => {
                if (res) {
                    decodeToken(keycloak.token);
                }
            })
    }, []);
    const login = () => {
        keycloak.login();
    }

    return (
        <div>
            <button onClick={login}>Login</button>
        </div>
    )
}