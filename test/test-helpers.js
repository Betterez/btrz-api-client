const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

module.exports = {
  axiosMock: new MockAdapter(axios),
  expectRequest: function({ statusCode, token, jwtToken, withoutApiKey = false }) {
    return function({ headers, method }) {
      if((headers['x-api-key'] && headers['x-api-key'] === token) || withoutApiKey) {
        if (['post', 'put', 'delete', 'patch'].includes(method)) {
          if(headers.authorization && headers.authorization === `Bearer ${jwtToken}`) {
            return [statusCode]
          } else {
            return [403];
          }
        } else {
          return [statusCode];
        }
      } else {
        return [403];
      }
    }
  }
};