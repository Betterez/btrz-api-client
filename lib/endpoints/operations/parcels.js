"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function parcelFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function get(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        id = _ref2.id,
        headers = _ref2.headers;

    return client({
      url: "/parcels/" + id,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers,
        providerId = _ref3.providerId;

    var query_ = providerId ? _extends({}, query, { providerId: providerId }) : query;
    return client({
      url: "/parcels",
      params: query_,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function addScan(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        id = _ref4.id,
        operationType = _ref4.operationType,
        locationData = _ref4.locationData,
        headers = _ref4.headers;

    return client({
      url: "/parcels/" + id + "/scans",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { operationType: operationType, locationData: locationData }
    });
  }

  function addComment(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        headers = _ref5.headers,
        id = _ref5.id,
        comment = _ref5.comment;

    return client({
      url: "/parcels/" + id + "/user-comments",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { comment: comment }
    });
  }

  function deleteComment(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers,
        id = _ref6.id,
        commentId = _ref6.commentId;

    return client({
      url: "/parcels/" + id + "/user-comments/" + commentId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  return {
    get: get,
    all: all,
    addScan: addScan,
    addComment: addComment,
    deleteComment: deleteComment
  };
}

module.exports = parcelFactory;