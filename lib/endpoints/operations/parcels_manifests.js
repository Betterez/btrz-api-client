"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function parcelsManifestsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/parcels-manifests",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query
    });
  }

  // function get({token, jwtToken, id, headers}) {
  //   return client({
  //     url: `/passenger-check-in-info/${id}`,
  //     method: "get",
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
  //   });
  // }

  // function update({token, jwtToken, id, data, headers, query}) {
  //   return client({
  //     url: `/passenger-check-in-info/${id}`,
  //     method: "put",
  //     params: query,
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
  //     data
  //   });
  // }

  // function remove({token, jwtToken, id, headers}) {
  //   return client({
  //     url: `/passenger-check-in-info/${id}`,
  //     method: "delete",
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
  //   });
  // }

  function create(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        data = _ref3.data,
        headers = _ref3.headers;

    return client({
      url: "/parcels-manifests",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  return {
    all: all,
    // get,
    // update,
    // remove,
    create: create
  };
}

module.exports = parcelsManifestsFactory;