
const callApi = () => fetch('http://localhost:8081/hello')
    .then((res) => res.text())
    .then((value) => alert(value));

export const Api = ({ token }) => (
    <div>
        <h3>API</h3>
        <button onClick={callApi}>Call</button>
    </div>
)