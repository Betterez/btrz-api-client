/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

function emailSettingsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      params: query,
      url: "/email-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }
  function getByEmail({token, jwtToken, email, query = {}, headers}) {
    return client({
      params: query,
      url: `/email-settings/${email}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({data, token, jwtToken, headers}) {
    return client({
      url: "/email-settings",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function update({token, jwtToken, email, data, headers}) {
    return client({
      url: `/email-settings/${email}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  function remove({email, token, jwtToken, headers}) {
    return client({
      url: `/email-settings/${email}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    getByEmail,
    create,
    update,
    remove
  };
}

module.exports = emailSettingsFactory;
