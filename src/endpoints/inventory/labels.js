const {authorizationHeaders} = require("../endpoints_helpers.js");

function labelsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client.get("/labels", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({labelId, token, jwtToken, query = {}, headers}) {
    return client.get(`/labels/${labelId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, label, token, headers}) {
    return client({
      url: "/labels",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {label}
    });
  }

  function update({jwtToken, token, labelId, label, headers}) {
    return client({
      url: `/labels/${labelId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {label}
    });
  }


  function remove({jwtToken, token, labelId, headers}) {
    return client({
      url: `/labels/${labelId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = labelsFactory;
