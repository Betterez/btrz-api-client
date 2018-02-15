const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function giftCertificatesFactory({ client, internalAuthTokenProvider }) {

  function get({ token, GCNumber }) {
    return client({
      url: `/gift-certificates/${GCNumber}`,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return { 
    get
  };
}

module.exports = giftCertificatesFactory;