"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function interlineFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var invitations = {
    all: function all(_ref2) {
      var token = _ref2.token,
          jwtToken = _ref2.jwtToken,
          _ref2$query = _ref2.query,
          query = _ref2$query === undefined ? {} : _ref2$query,
          headers = _ref2.headers;

      return client({
        url: "/interline/invitations",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    get: function get(_ref3) {
      var token = _ref3.token,
          invitationId = _ref3.invitationId,
          headers = _ref3.headers;

      return client.get("/interline/invitations/" + invitationId, {
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref4) {
      var data = _ref4.data,
          token = _ref4.token,
          jwtToken = _ref4.jwtToken,
          headers = _ref4.headers;

      return client({
        url: "/interline/invitations",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    },
    update: function update(_ref5) {
      var invitationId = _ref5.invitationId,
          data = _ref5.data,
          token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          headers = _ref5.headers;

      return client({
        url: "/interline/invitations/" + invitationId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  var consumers = {
    all: function all(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query,
          headers = _ref6.headers;

      return client({
        url: "/interline/consumers",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var providers = {
    all: function all(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          _ref7$query = _ref7.query,
          query = _ref7$query === undefined ? {} : _ref7$query,
          headers = _ref7.headers;

      return client({
        url: "/interline/providers",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  var network = {
    get: function get(_ref8) {
      var token = _ref8.token,
          networkId = _ref8.networkId,
          headers = _ref8.headers;

      return client.get("/interline/" + networkId, {
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    update: function update(_ref9) {
      var networkId = _ref9.networkId,
          data = _ref9.data,
          token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          headers = _ref9.headers;

      return client({
        url: "/interline/" + networkId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    },
    remove: function remove(_ref10) {
      var networkId = _ref10.networkId,
          token = _ref10.token,
          jwtToken = _ref10.jwtToken,
          headers = _ref10.headers;

      return client({
        url: "/interline/" + networkId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    }
  };

  return {
    invitations: invitations,
    consumers: consumers,
    providers: providers,
    network: network
  };
}

module.exports = interlineFactory;