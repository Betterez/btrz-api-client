const {authorizationHeaders} = require("./../endpoints_helpers");

function invoicesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/invoices",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/invoices/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function getInvoiceFailures({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/failures",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    all,
    get,
    getInvoiceFailures
  };
}

module.exports = invoicesFactory;
