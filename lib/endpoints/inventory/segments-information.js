"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function segmentsInformationFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/segments-information", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var segmentInformationId = _ref3.segmentInformationId,
        token = _ref3.token,
        headers = _ref3.headers,
        jwtToken = _ref3.jwtToken;

    return client.get("/segments-information/" + segmentInformationId, {
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        segmentInformation = _ref4.segmentInformation,
        headers = _ref4.headers;

    return client({
      url: "/segments-information",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        segmentInformation: segmentInformation
      }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        segmentInformationId = _ref5.segmentInformationId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/segments-information/" + segmentInformationId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        segmentInformationId = _ref6.segmentInformationId,
        segmentInformation = _ref6.segmentInformation,
        headers = _ref6.headers;

    return client({
      url: "/segments-information/" + segmentInformationId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        segmentInformation: segmentInformation
      }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove
  };
}

module.exports = segmentsInformationFactory;