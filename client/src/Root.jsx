import {useEffect, useState} from "react";
import Keycloak from "keycloak-js";
import {UserInfo} from "./UserInfo";
import {Api} from "./Api";

const initOptions = {
    url: 'http://127.0.0.1:8080/', realm: 'my-realm', clientId: 'test-client', onLoad: 'login-required'
}

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
        </div>
    )
};