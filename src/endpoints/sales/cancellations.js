const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Request body for POST /cancellations (btrz-api-sales). CancelPostData. Item IDs grouped by family; trxId required.
 * @typedef {{
 *   trxId: string,
 *   fees: number[],
 *   flexPasses: string[],
 *   parcels: string[],
 *   redeemableItems: string[],
 *   soldItems: string[],
 *   tickets: string[],
 *   giftCertificates: string[],
 *   reservations: string[],
 *   insurances: string[],
 *   channel: string,
 *   penalty?: { amount: number, reason: string },
 *   overrideCancelFees?: Array<{ _id: string, reason: string }>,
 *   currency?: string,
 *   terminalPayload?: { status: string, provider: string, auth?: string },
 *   paymentDetails?: Array<{ _id: string, authorization: string }>
 * }} CancelPostData
 */

/**
 * Request body for PUT /cancellations (btrz-api-sales). CancelPutData. Unmodified cancel set from POST response (must include _id and signature).
 * @typedef {{ _id: string, cancellation: Object, signature: string }} CancelPutData
 */

/**
 * Request body for PUT /cancellations/:pendingTransactionId (btrz-api-sales). CompletePaymentCancellationData.
 * @typedef {{
 *   provider: string,
 *   type: string,
 *   result: object,
 *   createdAt: object,
 *   displayName: string,
 *   status: string,
 *   amount: number,
 *   referenceNumber: string,
 *   authCode?: string
 * }} CompletePaymentCancellationData
 */

function cancellationEndpointsFactory({client, internalAuthTokenProvider}) {
  /**
   * POST /cancellations - creates a cancel set (preview) with calculated refunds and signature. Does not execute refunds. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CancelPostData} opts.cancelData - Refundable item IDs by family, trxId, channel, penalty (optional), etc.
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ _id: string, cancellation: Object, signature: string }>>} Cancel set (signed). Rejects with 400 (e.g. MISSING_CANCELLABLE_IDS, INVALID_CANCEL_SET, [itemType]_NOT_REFUNDABLE), 401, 403 (NOT_ALLOWED_FOR_ONLINE, FEE_OVERRIDE_NOT_ALLOWED), 404 ([itemType]_NOT_FOUND), 409 (CURRENCY_EXCHANGE_MISMATCH, AGENCY_CURRENCY_MISMATCH), 500.
   */
  function createCancelSet({token, jwtToken, cancelData, headers}) {
    return client({
      url: "/cancellations",
      method: "POST",
      data: {
        cancellation: cancelData
      },
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /cancellations - executes the refund using the signed cancel set from POST. Body is cancelSet (or object with cancelSet key). API does not accept query params. Duplicate submission (same dupKey within 30s) returns 409.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {CancelPutData} opts.cancelSet - Unmodified cancel set from createCancelSet response
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ transaction: Object }>>} RefundResponse. Rejects with 400 (e.g. INVALID_SIGNATURE, MISSING_TERMINAL_PAYLOAD, REFUNDED_ITEM), 401, 409 (NOT_FOUND_FOR_REFUND, REFUND_EXECUTION_ERROR, PAYMENT_ROLLBACK_FAILED, CONFLICT duplicate), 500.
   */
  function createRefund({token, jwtToken, cancelSet, headers}) {
    return client({
      url: "/cancellations",
      method: "PUT",
      data: cancelSet,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * PUT /cancellations/:pendingTransactionId - completes a pending payment for a cancellation transaction (e.g. terminal refund). API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.pendingTransactionId - Negative (pending) transaction ID (ObjectId)
   * @param {CompletePaymentCancellationData} opts.paymentResult - Payment result from terminal/provider
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse<{ transaction?: Object, paymentResult?: Object }>>} GetCompletePaymentCancellationResponse. Rejects with 400 (INVALID_PENDING_TRANSACTION_ID, INVALID_TRANSACTION_STATUS, PAYMENT_NOT_PENDING, etc.), 401, 404 (TRANSACTION_NOT_FOUND, PAYMENT_NOT_FOUND, etc.), 500.
   */
  function updateCompletePayment({token, jwtToken, pendingTransactionId, paymentResult, headers}) {
    return client({
      url: `/cancellations/${pendingTransactionId}`,
      method: "PUT",
      data: {paymentResult},
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    sets: {
      create: createCancelSet
    },
    refunds: {
      create: createRefund
    },
    update: updateCompletePayment
  };
}

module.exports = cancellationEndpointsFactory;
