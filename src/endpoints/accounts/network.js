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
    },
    get({token, query, headers, sellerId}) {
      return client({
        url: `/network/agencies/${sellerId}`,
        params: query,
        headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
      });
    },
    update({jwtToken, token, sellerId, agency, headers, query}) {
      return client({
        url: `/network/agencies/${sellerId}`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          agency
        },
        params: query
      });
    },
    create({jwtToken, token, agency, headers}) {
      return client({
        url: "/network/agencies",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          agency
        }
      });
    },
    removeProduct({token, jwtToken, productId, headers}) {
      return client({
        url: "/network/agencies/remove-product",
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          productId
        }
      });
    },
    removeFare({token, jwtToken, fareId, headers}) {
      return client({
        url: "/network/agencies/remove-fare",
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: {
          fareId
        }
      });
    }
  };

  return {
    agencies
  };
}

module.exports = networkFactory;
