const { authorizationHeaders } = require("./../endpoints_helpers");

function journeyPricesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {}, headers }) {
    return client({
      url: "/journey-prices",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
    });
  }

  function get({id, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/journey-prices/${id}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }


  function deleteById({ token, jwtToken, id, headers }) {
    return client({
      url: `/journey-prices/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
    });
  }

  function create({ token, jwtToken, journeyPrice, headers }) {
    return client({
      url: "/journey-prices",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { journeyPrice }
    });
  }

  function update({ token, jwtToken, journeyPriceId, journeyPrice, headers }) {
    return client({
      url: `/journey-prices/${journeyPriceId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { update: journeyPrice }
    });
  }  

  return {
    all,
    deleteById,
    get,
    create,
    update
  };
}

module.exports = journeyPricesFactory;
