const {authorizationHeaders} = require("./../endpoints_helpers");

function systemFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/system",
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
      url: "/system",
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

module.exports = systemFactory;
