const { authorizationHeaders } = require("./../endpoints_helpers");

function tripsFactory({ client, internalAuthTokenProvider }) {
  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/trips",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function get({token, id}) {
    return client.get(`/trip/${id}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all,
    get
  };
}

module.exports = tripsFactory;
