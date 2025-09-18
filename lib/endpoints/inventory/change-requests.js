"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function changeRequestsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var changerequestId = _ref2.changerequestId,
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client({
      url: "/change-requests/" + changerequestId + "/manifests",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
    });
  }

  function create(_ref3) {
    var data = _ref3.data,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        headers = _ref3.headers;

    return client({
      url: "/change-requests/manifests",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function update(_ref4) {
    var changerequestId = _ref4.changerequestId,
        data = _ref4.data,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        headers = _ref4.headers;

    return client({
      url: "/change-requests/" + changerequestId + "/manifests",
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  var schedules = {
    get: function get(_ref5) {
      var changeRequestId = _ref5.changeRequestId,
          token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          _ref5$query = _ref5.query,
          query = _ref5$query === undefined ? {} : _ref5$query,
          headers = _ref5.headers;

      return client({
        url: "/change-requests/" + changeRequestId + "/schedules",
        params: query,
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, jwtToken: jwtToken, headers: headers })
      });
    },
    create: function create(_ref6) {
      var data = _ref6.data,
          token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          headers = _ref6.headers;

      return client({
        url: "/change-requests/schedules",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    },
    update: function update(_ref7) {
      var changeRequestId = _ref7.changeRequestId,
          data = _ref7.data,
          token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          headers = _ref7.headers;

      return client({
        url: "/change-requests/" + changeRequestId + "/schedules",
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    get: get,
    create: create,
    update: update,
    schedules: schedules
  };
}

module.exports = changeRequestsFactory;