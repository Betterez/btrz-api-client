"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function amenityGroupsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/amenity-groups", {
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        amenityGroupId = _ref3.amenityGroupId,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client.get("/amenity-groups/" + amenityGroupId, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        amenityGroup = _ref4.amenityGroup;

    return client({
      url: "/amenity-groups",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { amenityGroup: amenityGroup }
    });
  }

  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        amenityGroupId = _ref5.amenityGroupId,
        amenityGroup = _ref5.amenityGroup;

    return client({
      url: "/amenity-groups/" + amenityGroupId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: { amenityGroup: amenityGroup }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update
  };
}

module.exports = amenityGroupsFactory;