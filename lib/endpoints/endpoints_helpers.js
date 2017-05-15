'use strict';

function authorizationHeaders(_ref) {
  var token = _ref.token,
      jwtToken = _ref.jwtToken;

  var headers = {};

  if (token) {
    headers['x-api-key'] = '' + token;
  }

  if (jwtToken) {
    headers['authorization'] = 'Bearer ' + jwtToken;
  }

  return headers;
}

module.exports = {
  authorizationHeaders: authorizationHeaders
};