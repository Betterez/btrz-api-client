const { authorizationHeaders } = require("./../endpoints_helpers");

function giftCertificateDefinitionsFactory({client, internalAuthTokenProvider}) {

  function all({ token, query = {} }) {
    return client.get("/gift-certificate-definitions", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    all
  };

}

module.exports = giftCertificateDefinitionsFactory;
