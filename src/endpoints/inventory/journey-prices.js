const { authorizationHeaders } = require("./../endpoints_helpers");

function journeyPricesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/journey-prices",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  function get({id, token, jwtToken, query = {}}) {
    return client({
      url: `/journey-prices/${id}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }


  function deleteById({ token, jwtToken, id }) {
    return client({
      url: `/journey-prices/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  return {
    all,
    deleteById,
    get
  };
}

module.exports = journeyPricesFactory;
