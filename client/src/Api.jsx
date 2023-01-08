
const callApi = (token) => fetch('http://localhost:8081/hello', {
    headers: {
        // Authorization: `Bearer ${token}`
    }
})
    .then((res) => res.text())
    .then((value) => alert(value));

export const Api = ({ token }) => (
    <div>
        <h3>API</h3>
        <button onClick={() => callApi(token)}>Call</button>
    </div>
)