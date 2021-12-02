"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function amenitiesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/amenities", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        amenityId = _ref3.amenityId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client.get("/amenities/" + amenityId, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        amenity = _ref4.amenity,
        headers = _ref4.headers;

    return client({
      url: "/amenities",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { amenity: amenity }
    });
  }

  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        amenityId = _ref5.amenityId,
        amenity = _ref5.amenity,
        headers = _ref5.headers;

    return client({
      url: "/amenities/" + amenityId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { amenity: amenity }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
}

module.exports = amenitiesFactory;