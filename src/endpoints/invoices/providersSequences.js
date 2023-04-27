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

  function get({token, jwtToken, invoiceProviderId, invoiceProviderSequenceId, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences/${invoiceProviderSequenceId}`,
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

  function update({token, jwtToken, invoiceProviderId, invoiceProviderSequenceId, data, query = {}, headers}) {
    return client({
      url: `/providers/${invoiceProviderId}/sequences/${invoiceProviderSequenceId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    remove,
    create,
    update
  };
}

module.exports = providersSequencesFactory;
