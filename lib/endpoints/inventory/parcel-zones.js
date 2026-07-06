const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * Query params for GET /parcel-zones (btrz-api-inventory). See get-parcel-zones getSpec().
 * @typedef {Object} ParcelZonesListQuery
 * @property {string} [providerIds] - Provider IDs to get parcel zones for
 */

/**
 * Factory for parcel-zones API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, bucket: function }}
 */
function parcelZonesFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /parcel-zones - list parcel zones.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {ParcelZonesListQuery} [opts.query] - Query params (providerIds)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function all({
    token,
    query = {},
    headers
  }) {
    return client("/parcel-zones", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * POST /parcel-zones - create parcel zone. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} opts.parcelZone - Parcel zone payload
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({
    token,
    parcelZone,
    jwtToken,
    headers
  }) {
    return client({
      url: "/parcel-zones",
      method: "post",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        parcelZone
      }
    });
  }

  /**
   * PUT /parcel-zone/:parcelZoneId - update parcel zone. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} [opts.token] - API key
   * @param {string} opts.parcelZoneId - Parcel zone id
   * @param {Object} opts.parcelZone - Parcel zone payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({
    jwtToken,
    token,
    parcelZoneId,
    parcelZone,
    headers
  }) {
    return client({
      url: `/parcel-zone/${parcelZoneId}`,
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: {
        parcelZone
      }
    });
  }

  /**
   * GET /parcel-zones/bucket - get matching parcel bucket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {Object} [opts.query] - Query params for bucket lookup
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function bucket({
    token,
    query = {},
    headers
  }) {
    return client.get("/parcel-zones/bucket", {
      params: query,
      headers: authorizationHeaders({
        token,
        internalAuthTokenProvider,
        headers
      })
    });
  }
  return {
    all,
    create,
    update,
    bucket
  };
}
module.exports = parcelZonesFactory;