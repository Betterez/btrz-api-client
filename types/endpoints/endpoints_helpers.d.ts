export function authorizationHeaders({ token, jwtToken, internalAuthTokenProvider, headers }: {
    token: any;
    jwtToken: any;
    internalAuthTokenProvider: any;
    headers: any;
}): {
    "x-api-key": string;
    cookie: any;
    authorization: string;
};
