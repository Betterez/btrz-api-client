const {authorizationHeaders} = require("../endpoints_helpers");

function gtiFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/gti",
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
      url: "/gti",
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

module.exports = gtiFactory;
