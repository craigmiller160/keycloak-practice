import Keycloak from "keycloak-js";
import {useEffect} from "react";

const initOptions = {
    url: 'http://127.0.0.1:8080/', realm: 'practice', clientId: 'practice-app', onLoad: 'login-required'
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

export const Login = () => {
    useEffect(() => {
        keycloak.init({ onLoad: initOptions.onLoad })
            .then((res) => {
                console.log('RESULT', res, keycloak.token);
            })
    }, []);
    // const login = () => {
    //     console.log('Clicked', keycloak.login);
    //     keycloak.login();
        // keycloak.init({ onLoad: initOptions.onLoad });
    // }

    return (
        <div>
            {/*<button onClick={login}>Login</button>*/}
        </div>
    )
}