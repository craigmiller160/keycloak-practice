import {useEffect, useState} from "react";
import Keycloak from "keycloak-js";
import {UserInfo} from "./UserInfo";
import {Api} from "./Api";
import {Cookies} from "./Cookies";

const initOptions = {
    url: 'http://127.0.0.1:8080/', realm: 'my-realm', clientId: 'my-client', onLoad: 'login-required'
}
// const initOptions = {
//     url: 'https://auth-craigmiller160.ddns.net/', realm: 'apps-dev', clientId: 'expense-tracker-ui', onLoad: 'login-required'
// }

const keycloak = new Keycloak(initOptions);

export const Root = () => {
    const [state, setState] = useState({
        token: '',
        isDone: false
    })
    useEffect(() => {
        keycloak.init({ onLoad: initOptions.onLoad })
            .then((res) => {
                if (res) {
                    setState({
                        token: keycloak.token,
                        isDone: true
                    });
                } else {
                    alert('Login failed');
                }
            })
            .catch((ex) => {
                console.error(ex);
                alert('Error with login');
            });

        // setInterval(() => {
        //     console.log('UPDATING TOKEN');
            // keycloak.updateToken(70)
            //     .then((res) => {
            //         if (res) {
            //             setState({
            //                 token: keycloak.token,
            //                 isDone: true
            //             });
            //         } else {
            //             alert('Refresh failed')
            //         }
            //     })
            //     .catch((ex) => {
            //         // TODO error occurs if the user is not logged in
            //         console.error(ex);
            //         alert('Error with refresh');
            //     })
        // }, 60_000)
    }, []);

    if (!state.isDone) {
        return <p>Waiting</p>
    }
    return (
        <div>
            <h1>KeyCloak Practice</h1>
            <UserInfo token={state.token} />
            <Api token={state.token} />
            <Cookies />
        </div>
    )
};