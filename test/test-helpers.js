const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

module.exports = {
  axiosMock: new MockAdapter(axios),
  // eslint-disable-next-line max-len
  expectRequest: function _expectRequest({statusCode, token, jwtToken, internalAuthTokenProvider, withoutApiKey = false, requireJwtTokenOnGet = false}) {
    return ({headers, method}) => {
      if ((headers["x-api-key"] && headers["x-api-key"] === token) || withoutApiKey) {
        const methods = ["post", "put", "delete", "patch"];
        if (requireJwtTokenOnGet) {
          methods.push("get");
        }
        if (methods.includes(method)) {
          if (headers.authorization && (headers.authorization === `Bearer ${jwtToken}` ||
          headers.authorization === `Bearer ${internalAuthTokenProvider.getToken()}`)) {
            return [statusCode];
          }
          return [403];
        }
        return [statusCode];
      }
      return [403];
    };
  }
};
