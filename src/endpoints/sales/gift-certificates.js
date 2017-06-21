const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function giftCertificatesFactory({ client }) {

  function get({ token, GCNumber }) {
    return client({
      url: `/gift-certificates/${GCNumber}`,
      headers: authorizationHeaders({token})
    });
  }

  return { 
    get
  };
}

module.exports = giftCertificatesFactory;