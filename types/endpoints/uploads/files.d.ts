export = filesFactory;
declare function filesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    upload: ({ token, jwtToken, formData, headers }: {
        token: any;
        jwtToken: any;
        formData: any;
        headers: any;
    }) => any;
};
