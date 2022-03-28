"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function networkFactory(_ref) {
    var client = _ref.client,
        internalAuthTokenProvider = _ref.internalAuthTokenProvider;

    var agencies = {
        all: function all(_ref2) {
            var token = _ref2.token,
                jwtToken = _ref2.jwtToken,
                _ref2$query = _ref2.query,
                query = _ref2$query === undefined ? {} : _ref2$query,
                headers = _ref2.headers;

            return client({
                url: "/network/agencies",
                params: query,
                headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
            });
        }
    };

    return {
        agencies: agencies
    };
}

module.exports = networkFactory;