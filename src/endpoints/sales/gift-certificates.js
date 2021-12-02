const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function giftCertificatesFactory({
  client, internalAuthTokenProvider
}) {
  function get({token, GCNumber, query = {}, headers}) {
    return client({
      url: `/gift-certificates/${GCNumber}`,
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    get
  };
}

module.exports = giftCertificatesFactory;
