"use strict";

/* eslint-disable import/extensions */
var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function ImagesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      params: query,
      url: "/images",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers,
        imageId = _ref3.imageId;

    return client({
      params: query,
      url: "/images/" + imageId,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        image = _ref4.image,
        headers = _ref4.headers;

    return client({
      url: "/images",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: {
        image: image
      }
    });
  }

  function remove(_ref5) {
    var imageId = _ref5.imageId,
        token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers;

    return client({
      url: "/images/" + imageId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    remove: remove
  };
}

module.exports = ImagesFactory;