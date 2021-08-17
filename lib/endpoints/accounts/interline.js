"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function interlineFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  var invitations = {
    get: function get(_ref2) {
      var token = _ref2.token,
          invitationId = _ref2.invitationId;

      return client.get("/interline/invitations/" + invitationId, {
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
      });
    },
    create: function create(_ref3) {
      var data = _ref3.data,
          token = _ref3.token,
          jwtToken = _ref3.jwtToken;

      return client({
        url: "/interline/invitations",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
        data: data
      });
    },
    update: function update(_ref4) {
      var invitationId = _ref4.invitationId,
          data = _ref4.data,
          token = _ref4.token,
          jwtToken = _ref4.jwtToken;

      return client({
        url: "/interline/invitations/" + invitationId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
        data: data
      });
    }
  };

  var consumers = {
    all: function all(_ref5) {
      var token = _ref5.token,
          jwtToken = _ref5.jwtToken,
          _ref5$query = _ref5.query,
          query = _ref5$query === undefined ? {} : _ref5$query;

      return client({
        url: "/interline/consumers",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
      });
    }
  };

  var providers = {
    all: function all(_ref6) {
      var token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          _ref6$query = _ref6.query,
          query = _ref6$query === undefined ? {} : _ref6$query;

      return client({
        url: "/interline/providers",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
      });
    }
  };

  var network = {
    get: function get(_ref7) {
      var token = _ref7.token,
          networkId = _ref7.networkId;

      return client.get("/interline/" + networkId, {
        headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
      });
    },
    update: function update(_ref8) {
      var networkId = _ref8.networkId,
          data = _ref8.data,
          token = _ref8.token,
          jwtToken = _ref8.jwtToken;

      return client({
        url: "/interline/" + networkId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
        data: data
      });
    },
    remove: function remove(_ref9) {
      var networkId = _ref9.networkId,
          token = _ref9.token,
          jwtToken = _ref9.jwtToken;

      return client({
        url: "/interline/" + networkId,
        method: "delete",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
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