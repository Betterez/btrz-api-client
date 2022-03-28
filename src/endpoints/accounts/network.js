const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function networkFactory({client, internalAuthTokenProvider}) {
    const agencies = {
        all({token, jwtToken, query = {}, headers}) {
            return client({
                url: "/network/agencies",
                params: query,
                headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
            });
        }
    };

    return {
        agencies
    };
}

module.exports = networkFactory;