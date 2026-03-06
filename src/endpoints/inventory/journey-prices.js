const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /journey-prices (btrz-api-inventory). See get-journey-prices getSpec().
 * @typedef {Object} JourneyPricesListQuery
 * @property {string} providerIds - Provider IDs (required). Comma-separated for multiple
 * @property {string} [versionIds] - Version IDs filter. Comma-separated
 * @property {string} [productIds] - Product IDs filter. Comma-separated
 * @property {string} [fareClassIds] - Fare class IDs. Comma-separated
 * @property {string} [seatClassIds] - Seat class IDs. Comma-separated
 * @property {string} [fareIds] - Fare IDs. Comma-separated
 * @property {string} [brandIds] - Brand IDs. Comma-separated
 * @property {string} [amenityGroupIds] - Amenity group IDs. Comma-separated
 * @property {string} [operatingCompanyIds] - Operating company IDs. Comma-separated
 * @property {string} [routeIds] - Route IDs. Comma-separated
 * @property {string} [travelRoutesIds] - Travel route IDs. Comma-separated
 * @property {string} [shiftLocationIds] - Shift location IDs. Comma-separated
 * @property {string} [originIds] - Origin (departure) station IDs. Comma-separated
 * @property {string} [destinationIds] - Destination (arrival) station IDs. Comma-separated
 * @property {number} [price.min] - Min price filter
 * @property {number} [price.max] - Max price filter
 * @property {number} [regularPrice.min] - Min regular price filter
 * @property {number} [regularPrice.max] - Max regular price filter
 * @property {number} [returnPriceModifier.min] - Min return price modifier filter
 * @property {number} [returnPriceModifier.max] - Max return price modifier filter
 * @property {string} [currencies] - ISO 4217 codes. Comma-separated (e.g. USD,MXN)
 * @property {string} [taxExempted] - Filter by tax exempted [true, false]
 */

/**
 * Query params for GET /journey-prices/:id (btrz-api-inventory). See get-journey-price getSpec().
 * @typedef {Object} JourneyPriceGetQuery
 * @property {boolean} [outdated] - If true, return history of updates
 * @property {string} [versionId] - Return only this versionId (object id)
 */

/**
 * Factory for journey-prices API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, deleteById: function, get: function, create: function, update: function }}
 */
function journeyPricesFactory({client, internalAuthTokenProvider}) {
  /**
   * GET /journey-prices - list journey prices.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {JourneyPricesListQuery} [opts.query] - Query params (providerIds required; see getSpec for full list)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/journey-prices",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * GET /journey-prices/:id - get journey price by id.
   * @param {Object} opts
   * @param {string} opts.id - Journey price id
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {JourneyPriceGetQuery} [opts.query] - Query params (outdated, versionId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function get({id, token, jwtToken, query = {}, headers}) {
    return client({
      url: `/journey-prices/${id}`,
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * DELETE /journey-prices/:id - delete journey price. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.id - Journey price id
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function deleteById({token, jwtToken, id, headers}) {
    return client({
      url: `/journey-prices/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /journey-prices - create journey price. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.journeyPrice - Journey price payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({token, jwtToken, journeyPrice, headers}) {
    return client({
      url: "/journey-prices",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {journeyPrice}
    });
  }

  /**
   * PATCH /journey-prices/:journeyPriceId - update journey price. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.journeyPriceId - Journey price id
   * @param {Object} opts.journeyPrice - Journey price payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({token, jwtToken, journeyPriceId, journeyPrice, headers}) {
    return client({
      url: `/journey-prices/${journeyPriceId}`,
      method: "patch",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {update: journeyPrice}
    });
  }

  return {
    all,
    deleteById,
    get,
    create,
    update
  };
}

module.exports = journeyPricesFactory;
