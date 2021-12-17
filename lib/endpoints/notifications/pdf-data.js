"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function pdfDataFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        itemId = _ref2.itemId,
        headers = _ref2.headers;

    var url = "/pdf-tickets/" + itemId;
    switch (query.family) {
      case "ticket":
        url = "/pdf-tickets/" + itemId;
        break;
      case "reservation":
        url = "/pdf-reservations/" + itemId;
        break;
      case "transaction":
        url = "/pdf-transactions/" + itemId;
        break;
      case "paid in":
        url = "/pdf-paid-ins/" + itemId;
        break;
      case "parcel":
        url = "/pdf-parcels/" + itemId;
        break;
      case "flexpass":
        url = "/pdf-flexpasses/" + itemId;
        break;
      case "bundle":
        url = "/pdf-redeemable-items/" + itemId;
        break;
      default:
        break;
    }
    return client.get(url, {
      params: query,
      headers: authorizationHeaders({
        token: token,
        internalAuthTokenProvider: internalAuthTokenProvider,
        headers: headers
      })
    });
  }

  return {
    get: get
  };
}

module.exports = pdfDataFactory;