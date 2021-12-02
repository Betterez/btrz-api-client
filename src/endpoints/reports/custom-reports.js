const { authorizationHeaders } = require("./../endpoints_helpers");

function customReportsFactory({ client, internalAuthTokenProvider }) {
  function create({token, customReport, jwtToken, headers }) {
    return client({
      url: "/custom-reports",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { customReport }
    });
  }

  function all({token, jwtToken, query = {}, headers }) {
    return client({
      url: "/custom-reports",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function remove({token, jwtToken, customReportId, headers}) {
    return client({
      url: `/custom-reports/${customReportId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    create,
    all,
    remove
  };
}

module.exports = customReportsFactory;
