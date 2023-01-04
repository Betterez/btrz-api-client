const {authorizationHeaders} = require("./../endpoints_helpers.js");

function giftCertificateDefinitionsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client.get("/gift-certificate-definitions", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function get({token, jwtToken, giftcertificateId, query = {}, headers}) {
    return client({
      url: `/gift-certificate-definitions/${giftcertificateId}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function create({token, jwtToken, giftcertificate, query = {}, headers}) {
    return client({
      url: "/gift-certificate-definitions",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {giftcertificate}
    });
  }

  function update({token, jwtToken, giftcertificateId, giftcertificate, query = {}, headers}) {
    return client({
      url: `/gift-certificate-definitions/${giftcertificateId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data: {giftcertificate}
    });
  }

  function remove({token, jwtToken, giftcertificateId, query = {}, headers}) {
    return client({
      url: `/gift-certificate-definitions/${giftcertificateId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  return {
    all,
    get,
    create,
    update,
    remove
  };
}

module.exports = giftCertificateDefinitionsFactory;
