const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

module.exports = {
  axiosMock: new MockAdapter(axios),
  expectRequest: function({ statusCode, token, jwtToken }) {
    return function({ headers, method }) {
      if(headers['x-api-key'] && headers['x-api-key'] === token) {
        if (['post', 'put', 'delete'].includes(method)) {
          if(headers.authorization && headers.authorization === `Bearer ${jwtToken}`) {
            return [200]
          } else {
            return [403];
          }
        } else {
          return [200];
        }
      } else {
        return [400];
      }
    }
  }
};