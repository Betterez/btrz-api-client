const { authorizationHeaders } = require("./../endpoints_helpers");

function customReportsFactory({ client, internalAuthTokenProvider }) {
  function create({token, customReport, jwtToken }) {
    return client({
      url: "/custom-reports",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { customReport }
    });
  }

  function all({token, jwtToken, query = {} }) {
    return client({
      url: "/custom-reports",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  function remove({token, jwtToken, customReportId}) {
    return client({
      url: `/custom-reports/${customReportId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    create,
    all,
    remove
  };
}

module.exports = customReportsFactory;
