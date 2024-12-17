const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function clientsFactory({client, version}) {
  function create({
    jwtToken,
    data,
    headers
  }) {
    return client({
      url: `/${version}/client`,
      method: "post",
      headers: authorizationHeaders({jwtToken, headers}),
      data
    });
  }

  function get({
    jwtToken, clientId
  }) {
    return client({
      url: `/${version}/client`,
      method: "get",
      headers: Object.assign({clientId}, authorizationHeaders({jwtToken}))
    });
  }

  return {
    create,
    get
  };
}

module.exports = clientsFactory;
