const {authorizationHeaders} = require("../endpoints_helpers");

function taxesFactory({client, internalAuthTokenProvider}) {

  function all({token, query = {}, headers}) {
    return client.get("/taxes", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({taxId, token, query = {}, headers}) {
    return client.get(`/taxes/${taxId}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, tax, token, headers}) {
    return client({
      url: "/taxes",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {tax}
    });
  }

  function update({jwtToken, token, taxId, tax, headers}) {
    return client({
      url: `/taxes/${taxId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {tax}
    });
  }

  const exceptions = {
    create({jwtToken, token, taxException, headers}) {
      return client({
        url: "/taxes/exceptions",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: taxException
      });
    },
    update({jwtToken, token, taxExceptionId, taxException, headers}) {
      return client({
        url: `/taxes/exceptions/${taxExceptionId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: taxException
      });
    },
    get({jwtToken, token, taxExceptionId, headers}) {
      return client({
        url: `/taxes/exceptions/${taxExceptionId}`,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    all({jwtToken, token, query = {}, headers}) {
      return client({
        url: "/taxes/exceptions",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    delete({jwtToken, token, taxExceptionId, headers}) {
      return client({
        url: `/taxes/exceptions/${taxExceptionId}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    exceptions
  };
}

module.exports = taxesFactory;
