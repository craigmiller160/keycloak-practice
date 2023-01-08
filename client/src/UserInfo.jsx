
const tokenToClaims = (token) => {
    if (token) {
        const core = token.split('.')[1];
        return JSON.parse(atob(core));
    }
    return {};
}

export const UserInfo = ({ token }) => {
    const claims = tokenToClaims(token);
    return (
        <div>
            <h3>User Info</h3>
            <p>ID: {claims.sub}</p>
            <p>Name: {claims.name}</p>
        </div>
    )
}