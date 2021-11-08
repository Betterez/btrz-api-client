/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

function emailSettingsFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}}) {
    return client({
      params: query,
      url: "/email-settings",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }
  function getByEmail({token, jwtToken, email, query = {}}) {
    return client({
      params: query,
      url: `/email-settings/${email}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function create({data, token, jwtToken}) {
    return client({
      url: "/email-settings",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function update({token, jwtToken, email, data}) {
    return client({
      url: `/email-settings/${email}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  function remove({email, token, jwtToken}) {
    return client({
      url: `/email-settings/${email}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
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
