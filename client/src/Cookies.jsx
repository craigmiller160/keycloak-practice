
const sendRequest = (path) => fetch(`/cookies/${path}`);

export const Cookies = () => (
    <div>
        <h3>Cookies</h3>
        <button onClick={() => sendRequest('create')}>Create Cookie</button>
        <button onClick={() => sendRequest('endpoint1')}>Cookie Endpoint 1</button>
        <button onClick={() => sendRequest('endpoint2')}>Cookie Endpoint 2</button>
    </div>
)