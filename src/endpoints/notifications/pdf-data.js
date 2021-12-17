const {
  authorizationHeaders
} = require("./../endpoints_helpers");

function pdfDataFactory({
  client,
  internalAuthTokenProvider
}) {
  function get({
    token,
    query = {},
    itemId,
    headers
  }) {
    let url = `/pdf-tickets/${itemId}`;
    switch (query.family) {
      case "ticket":
        url = `/pdf-tickets/${itemId}`;
        break;
      case "reservation":
        url = `/pdf-reservations/${itemId}`;
        break;
      case "transaction":
        url = `/pdf-transactions/${itemId}`;
        break;
      case "paid in":
        url = `/pdf-paid-ins/${itemId}`;
        break;
      case "parcel":
        url = `/pdf-parcels/${itemId}`;
        break;
      case "flexpass":
        url = `/pdf-flexpasses/${itemId}`;
        break;
      case "bundle":
        url = `/pdf-redeemable-items/${itemId}`;
        break;
      default:
        break;
    }
    return client.get(url, {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  return {
    get
  };
}

module.exports = pdfDataFactory;
