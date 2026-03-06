const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /passenger-check-in-info (btrz-api-operations getSpec).
 * @typedef {Object} PassengerCheckInInfoListQuery
 * @property {string} documentType - Document type id (ObjectId; required)
 * @property {string} documentNumber - Document number of the passenger (required)
 * @property {string} [providerId] - Provider/account id; defaults to authenticated account when omitted
 */

/**
 * PUT and POST /passenger-check-in-info do not define query params in backend getSpec. Use for optional query keys forwarded as-is.
 * @typedef {Object} PassengerCheckInInfoPostQuery
 */

/**
 * Factory for passenger-check-in-info API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} passenger-check-in-info API methods
 */
function passengerCheckInInfoFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /passenger-check-in-info - list passenger check-in info by document.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PassengerCheckInInfoListQuery} opts.query - documentType, documentNumber, optional providerId
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} GetPassengerCheckInInfoResponse; 400 WRONG_DATA, INVALID_DOCUMENTTYPE_ID
   */
  function all({token, jwtToken, query, headers}) {
    return client({
      url: "/passenger-check-in-info",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  /**
   * GET /passenger-check-in-info/:id - get passenger check-in info by id.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Passenger check-in info id (ObjectId)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({token, jwtToken, id, headers}) {
    return client({
      url: `/passenger-check-in-info/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /passenger-check-in-info/:id - update passenger check-in info. Backend getSpec has no query params; query is passed through.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Passenger check-in info id (ObjectId)
   * @param {Object} opts.data - PassengerCheckInInfoPutData
   * @param {PassengerCheckInInfoPostQuery} [opts.query] - Optional query params (backend getSpec has none; forwarded as-is)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>} 404 PASSENGERCHECKININFO_NOT_FOUND
   */
  function update({token, jwtToken, id, data, headers, query}) {
    return client({
      url: `/passenger-check-in-info/${id}`,
      method: "put",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  // function remove({token, jwtToken, id, headers}) {
  //   return client({
  //     url: `/passenger-check-in-info/${id}`,
  //     method: "delete",
  //     headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
  //   });
  // }

  /**
   * POST /passenger-check-in-info - create passenger check-in info. Backend getSpec has no query params; query is passed through.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {PassengerCheckInInfoPostQuery} [opts.query] - Optional query params (backend getSpec has none; forwarded as-is)
   * @param {Object} opts.data - PassengerCheckInInfoPostData (passengercheckininfo: ticketId, trxId, information, type)
   * @param {Object} [opts.headers] - Optional request headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, query = {}, data, headers}) {
    return client({
      url: "/passenger-check-in-info",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    update,
    // remove,
    create
  };
}

module.exports = passengerCheckInInfoFactory;
