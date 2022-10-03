const {authorizationHeaders} = require("./../endpoints_helpers");

function providersSequencesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, invoiceProviderId, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function remove({token, jwtToken, invoiceProviderId, id, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function create({token, jwtToken, invoiceProviderId, data, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences`,
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    remove,
    create
  };
}

module.exports = providersSequencesFactory;
