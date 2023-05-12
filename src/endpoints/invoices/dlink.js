const {authorizationHeaders} = require("./../endpoints_helpers");

function dlinkFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/dlink",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  function validateCreate({token, jwtToken, data, query = {}, headers}) {
    // eslint-disable-next-line no-param-reassign
    query.onlyValidateRequest = true;
    return client({
      url: "/dlink",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    create,
    validateCreate
  };
}

module.exports = dlinkFactory;
