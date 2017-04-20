const axios = require("axios");

function clientFactory({ baseURL, timeout }) {
  return axios.create({ baseURL, timeout, headers: { 'accept': 'application/json' } });
}

module.exports = { clientFactory }