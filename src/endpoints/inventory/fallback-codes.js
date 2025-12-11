const {authorizationHeaders} = require("./../endpoints_helpers.js");

function fallbackCodesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/fallback-codes", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({token, id, headers}) {
    return client.get(`/fallback-code/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, fallbackCode, headers}) {
    return client({
      url: "/fallback-codes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fallbackCode}
    });
  }

  function update({token, jwtToken, fallbackCodeId, fallbackCode, headers}) {
    return client({
      url: `/fallback-code/${fallbackCodeId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {fallbackCode}
    });
  }

  return {
    all,
    get,
    create,
    update
  };
}

module.exports = fallbackCodesFactory;
