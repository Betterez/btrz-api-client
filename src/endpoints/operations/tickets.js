const { authorizationHeaders } = require("./../endpoints_helpers");

function ticketsFactory({ client, internalAuthTokenProvider }) {

  function patch({ token, jwtToken, id, operations, warningsEnabled }) {
    return client({
      url: `/tickets/${id}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { operations, warningsEnabled }
    });
  }

  return {
    patch
  };
}

module.exports = ticketsFactory;