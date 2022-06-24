const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function subPrintTemplatesFactory({client, internalAuthTokenProvider}) {

  function create({jwtToken, token, subPrintTemplate, headers}) {
    return client({
      url: "/sub-print-templates",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        subPrintTemplate
      }
    });
  }
  return {
    create
  };
}

module.exports = subPrintTemplatesFactory;
