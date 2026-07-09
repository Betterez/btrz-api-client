const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/ticket-movement-settings", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the ticket movement settings", () => {
    axiosMock.onGet("/ticket-movement-settings")
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.ticketMovementSettings.get({token, jwtToken});
  });

  it("should update ticket movement settings", () => {
    const ticketMovementSettings = {
      preventMovementsAfterManifestHasBeenPrinted: true,
      preventSeatmapOptimizationMovementsWithDifferentSeatClassOrFees: false,
      preventMovementsWhenOriginalManifestIsBoarding: false,
      originalManifestIsBoardingWhen: null,
      preventMovementsWhenDestinationManifestIsBoarding: false,
      destinationManifestIsBoardingWhen: null,
      preventMovedTicketsFromBeingChanged: true,
      preventMovedTicketsFromBeingCancelled: false,
      preventMovementsWhenFareSpecificCapacityLimitsAreExceeded: true,
      sendSMSNotifications: true,
      allowSendingEmailNotification: true,
      useConfirmationRecipientForNotifications: false,
      maxMovementsPerTicket: 1,
      maxMovementsPerTicketWithAuthorization: 2,
      amenityGroupTransitions: {
        allowAny: true,
        allowedTransitions: null
      },
      timeRestrictions: {
        originalTripRestrictions: {
          cutoffMinutes: 0,
          referencePoint: "original_passenger_departure_time"
        },
        newTripRestrictions: {
          lowerBoundCutoffMinutes: 0,
          lowerBoundReferencePoint: "original_passenger_departure_time",
          upperBoundCutoffMinutes: 15,
          upperBoundReferencePoint: "original_passenger_departure_time"
        }
      },
      followingSeatBehaviorEnabled: true
    };

    axiosMock.onPut("/ticket-movement-settings")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken,
        body: ticketMovementSettings
      }));
    return api.accounts.ticketMovementSettings.update({
      token, jwtToken, ticketMovementSettings
    });
  });
});
