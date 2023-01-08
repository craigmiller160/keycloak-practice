
const tokenToClaims = (tokenContainer) => {
    if (tokenContainer) {
        const core = tokenContainer.token.split('.')[1];
        return JSON.parse(atob(core));
    }
    return {};
}

export const UserInfo = ({ tokenContainer }) => {
    const claims = tokenToClaims(tokenContainer);
    return (
        <div>
            <h3>User Info</h3>
            <p>ID: {claims.sub}</p>
            <p>Name: {claims.name}</p>
            <p>Exp: {new Date(claims.exp * 1000).toISOString()}</p>
        </div>
    );
}