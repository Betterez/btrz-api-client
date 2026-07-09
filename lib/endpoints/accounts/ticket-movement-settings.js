const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

/**
 * @typedef {Object} AmenityGroupTransition
 * @property {string} from - Original ticket amenity group id.
 * @property {string} to - Destination amenity group id.
 */

/**
 * @typedef {Object} AmenityGroupTransitionsSettings
 * @property {boolean} allowAny - When true, any transition is allowed.
 * @property {AmenityGroupTransition[] | null} allowedTransitions - Allowed transition pairs when allowAny is false.
 */

/**
 * @typedef {Object} OriginalTripRestrictions
 * @property {number} cutoffMinutes - Minutes before/after the selected reference point.
 * @property {"original_passenger_departure_time" | "original_schedule_departure_time"} referencePoint - Restriction reference point.
 */

/**
 * @typedef {Object} NewTripRestrictions
 * @property {number} lowerBoundCutoffMinutes - Lower bound for move eligibility in minutes.
 * @property {"original_passenger_departure_time"} lowerBoundReferencePoint - Lower bound reference point.
 * @property {number} upperBoundCutoffMinutes - Upper bound for move eligibility in minutes.
 * @property {"original_passenger_departure_time"} upperBoundReferencePoint - Upper bound reference point.
 */

/**
 * @typedef {Object} TimeRestrictionsSettings
 * @property {OriginalTripRestrictions} originalTripRestrictions - Restrictions applied to the original trip.
 * @property {NewTripRestrictions} newTripRestrictions - Restrictions applied to the destination trip.
 */

/**
 * Ticket movement settings payload used by the accounts API.
 * @typedef {Object} TicketMovementSettings
 * @property {boolean} preventMovementsAfterManifestHasBeenPrinted - Prevent moves after printing manifests.
 * @property {boolean} preventSeatmapOptimizationMovementsWithDifferentSeatClassOrFees - Block optimization moves changing class/fees.
 * @property {boolean} preventMovementsWhenOriginalManifestIsBoarding - Prevent moves when original manifest is boarding.
 * @property {null | "passengers_board_at_any_station" | "passengers_board_at_ticket_departure_station"} originalManifestIsBoardingWhen - Rule to determine original manifest boarding state.
 * @property {boolean} preventMovementsWhenDestinationManifestIsBoarding - Prevent moves when destination manifest is boarding.
 * @property {null | "passengers_board_at_any_station" | "passengers_board_at_ticket_departure_station"} destinationManifestIsBoardingWhen - Rule to determine destination manifest boarding state.
 * @property {boolean} preventMovedTicketsFromBeingChanged - Block changing tickets after movement.
 * @property {boolean} preventMovedTicketsFromBeingCancelled - Block cancelling tickets after movement.
 * @property {boolean} preventMovementsWhenFareSpecificCapacityLimitsAreExceeded - Prevent moves when fare capacity is exceeded.
 * @property {boolean} sendSMSNotifications - Enable SMS notifications for ticket movements.
 * @property {boolean} [allowSendingEmailNotification] - Enable email notifications for ticket movements.
 * @property {boolean} [useConfirmationRecipientForNotifications] - Send notifications to the confirmation recipient.
 * @property {number} maxMovementsPerTicket - Maximum ticket movements without authorization.
 * @property {number} [maxMovementsPerTicketWithAuthorization] - Maximum ticket movements with authorization.
 * @property {AmenityGroupTransitionsSettings} amenityGroupTransitions - Allowed amenity group transitions.
 * @property {TimeRestrictionsSettings} timeRestrictions - Time restriction rules.
 * @property {string[]} [allowMovementToManifestsWithStatus] - Allowed destination manifest statuses.
 * @property {string} [singleTicketMoveUIVersion] - Single ticket move UI version preference.
 * @property {boolean} [displayExpiredSchedulesInUIToMove] - Show expired schedules in move UI when true.
 * @property {boolean} [followingSeatBehaviorEnabled] - Enables following-seat behavior for automatic seat movement resolution.
 */

/**
 * @typedef {Object} GetTicketMovementSettingsOptions
 * @property {string} [token] - API key.
 * @property {string} [jwtToken] - JWT or internal auth symbol.
 * @property {Object} [headers] - Optional headers.
 */

/**
 * @typedef {Object} UpdateTicketMovementSettingsOptions
 * @property {string} [token] - API key.
 * @property {string} [jwtToken] - JWT or internal auth symbol.
 * @property {TicketMovementSettings} ticketMovementSettings - Full settings payload to persist.
 * @property {Object} [headers] - Optional headers.
 */

/**
 * Factory for ticket-movement-settings API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
function ticketMovementSettingsFactory({
  client,
  internalAuthTokenProvider
}) {
  /**
   * GET /ticket-movement-settings - get ticket movement settings for the account.
   * No query or path parameters. See get-handler getSpec() in btrz-api-accounts for response schema.
   * @param {GetTicketMovementSettingsOptions} opts
   * @returns {Promise<import("axios").AxiosResponse<TicketMovementSettings>>} Response body: ticket movement settings object. Errors: 401, 500
   */
  function get({
    token,
    jwtToken,
    headers
  }) {
    return client({
      url: "/ticket-movement-settings",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      })
    });
  }

  /**
   * PUT /ticket-movement-settings - update ticket movement settings for the account.
   * Body must include all required fields (see put-handler getSpec() in btrz-api-accounts).
   * Side effect: persists to account.preferences.ticketMovements.
   * @param {UpdateTicketMovementSettingsOptions} opts
   * @returns {Promise<import("axios").AxiosResponse<TicketMovementSettings>>} Updated settings. Errors: 400, 401, 500
   */
  function update({
    token,
    jwtToken,
    ticketMovementSettings,
    headers
  }) {
    return client({
      url: "/ticket-movement-settings",
      method: "put",
      headers: authorizationHeaders({
        token,
        jwtToken,
        internalAuthTokenProvider,
        headers
      }),
      data: ticketMovementSettings
    });
  }
  return {
    get,
    update
  };
}
module.exports = ticketMovementSettingsFactory;