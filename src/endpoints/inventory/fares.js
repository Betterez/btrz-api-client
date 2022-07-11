const { authorizationHeaders } = require("./../endpoints_helpers");

function faresFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {}, headers }) {
    return client.get("/fares", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({ token, id, headers }) {
    return client.get(`/fare/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, jwtToken, fare, headers }) {
    return client({
      url: "/fares",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { fare }
    });
  }

  function update({ token, jwtToken, fareId, fare, headers }) {
    return client({
      url: "/fare/" + fareId,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { fare }
    });
  }

  const adjustments = {
    create({ token, jwtToken, fareId, adjustmentsOverride, headers }) {
      return client({
        url: "/fares/" + fareId + "/adjustments-overrides",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: { adjustmentsOverride }
      });
    },

    remove({ token, jwtToken, fareId, adjustmentId, headers}) {
      return client({
        url: "/fares/" + fareId + "/adjustments-override/" + adjustmentId,
        method: "delete",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        })
      });
    }

  };

  return {
    all,
    get,
    update,
    create,
    adjustments
  };

}

module.exports = faresFactory;
