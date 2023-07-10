const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function segmentsInformationFactory({client, internalAuthTokenProvider}) {
  function all({
    token,
    jwtToken,
    query = {},
    headers
  }) {
    return client.get("/segments-information", {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({segmentInformationId, token, headers, jwtToken}) {
    return client.get(`/segments-information/${segmentInformationId}`, {
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, segmentInformation, headers}) {
    return client({
      url: "/segments-information",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        segmentInformation
      }
    });
  }

  function remove({jwtToken, segmentInformationId, token, headers}) {
    return client({
      url: `/segments-information/${segmentInformationId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update({jwtToken, token, segmentInformationId, segmentInformation, headers}) {
    return client({
      url: `/segments-information/${segmentInformationId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        segmentInformation
      }
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = segmentsInformationFactory;
