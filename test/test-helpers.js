const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

module.exports = {
  axiosMock: new MockAdapter(axios) 
};