const { authorizationHeaders } = require("./../endpoints_helpers");

function referenceNumbersFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, referenceNumberRequest, headers }) {
    return client({
      url: "/reference-numbers",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { referenceNumberRequest }
    });
  }

  return {
    create
  };
}

module.exports = referenceNumbersFactory;
