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
    },
    create: function create(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          manifestId = _ref6.manifestId,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query,
          data = _ref6.data,
          headers = _ref6.headers;

      return client({
        url: "/parcels-manifests/" + manifestId + "/parcels",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: data
      });
    }
  };

  var vehicles = {
    createOrUpdate: function createOrUpdate(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          manifestId = _ref7.manifestId,
          _ref7$query = _ref7.query,
          query = _ref7$query === undefined ? {} : _ref7$query,
          data = _ref7.data,
          headers = _ref7.headers;

      return client({
        url: "/parcels-manifests/" + manifestId + "/vehicles",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query,
        data: {
          parcelManifestVehicle: data
        }
      });
    }
  };

  return {
    all: all,
    get: get,
    create: create,
    parcels: parcels,
    vehicles: vehicles
  };
}

module.exports = parcelsManifestsFactory;