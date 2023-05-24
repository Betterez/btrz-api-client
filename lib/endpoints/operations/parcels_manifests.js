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

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        id = _ref3.id,
        headers = _ref3.headers;

    return client({
      url: "/parcels-manifests/" + id,
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  // function update({token, jwtToken, id, data, headers, query}) {
  //   return client({
  //     url: `/passenger-check-in-info/${id}`,
  //     method: "put",
  //     params: query,
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
  //     data
  //   });
  // }

  // function remove({token, jwtToken, manifestId, parcelId, headers}) {
  //   return client({
  //     url: `/parcels-manifests/${manifestId}`,
  //     method: "delete",
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
  //   });
  // }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/parcels-manifests",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  var parcels = {
    remove: function remove(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          manifestId = _ref5.manifestId,
          parcelId = _ref5.parcelId,
          headers = _ref5.headers;

      return client({
        url: "/parcels-manifests/" + manifestId + "/parcels/" + parcelId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    all: all,
    get: get,
    // update,
    // remove,
    create: create,
    parcels: parcels
  };
}

module.exports = parcelsManifestsFactory;