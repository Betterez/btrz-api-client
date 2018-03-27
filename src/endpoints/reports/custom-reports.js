const { authorizationHeaders } = require("./../endpoints_helpers");

function customReportsFactory({ client, internalAuthTokenProvider }) {
  function create({ token, customReport, jwtToken }) {
    return client({
      url: "/custom-reports",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { customReport }
    });
  }

  return {
    create
  };
}

module.exports = customReportsFactory;
