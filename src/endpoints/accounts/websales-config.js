/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

function websalesConfigFactory({client, internalAuthTokenProvider}) {
  function get({token, jwtToken, query = {}, headers}) {
    return client({
      params: query,
      url: "/websales-config",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({token, jwtToken, websalesConfigId, websalesConfig, headers}) {
    return client({
      url: `/websales-config/${websalesConfigId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: websalesConfig
    });
  }

  return {
    get,
    update
  };
}

module.exports = websalesConfigFactory;
