
const callApi = (token) => fetch('/api/hello', {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
    .then((res) => res.text())
    .then((value) => alert(value));

export const Api = ({ token }) => (
    <div>
        <h3>API</h3>
        <button onClick={() => callApi(token)}>Call With Token</button>
        <button onClick={() => callApi()}>Call Without Token</button>
    </div>
)