const {authorizationHeaders} = require("./../endpoints_helpers.js");

function shiftsFactory({client, internalAuthTokenProvider}) {
  function all({jwtToken, token, query, headers}) {
    return client.get("/shifts", {
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      params: query
    });
  }

  function get({token, userId, headers}) {
    return client.get(`/shift/user/${userId}`, {
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, shiftData, headers}) {
    return client({
      url: "/shifts",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: shiftData
    });
  }

  function update({jwtToken, token, shiftId, operations, headers, query}) {
    return client({
      url: `/shifts/${shiftId}`,
      method: "patch",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      }),
      data: {
        operations
      },
      params: query
    });
  }

  const locationClosureComments = {
    create({jwtToken, token, locationClosureId, locationClosureComment, headers}) {
      return client({
        url: `/shifts/location-closures/${locationClosureId}/comments`,
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: locationClosureComment
      });
    }
  };

  const locationClosureStatus = {
    update({jwtToken, token, locationClosureId, locationClosureStatusChange, headers}) {
      return client({
        url: `/shifts/location-closures/${locationClosureId}/status`,
        method: "put",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: locationClosureStatusChange
      });
    }
  };

  const locationClosures = {
    create({jwtToken, token, locationClosure, headers}) {
      return client({
        url: "/shifts/location-closures",
        method: "post",
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        data: locationClosure
      });
    },
    all({jwtToken, token, query, headers}) {
      return client.get("/shifts/location-closures", {
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
      });
    },
    get({token, jwtToken, locationClosureId, headers}) {
      return client.get(`/shifts/location-closures/${locationClosureId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    comments: locationClosureComments,
    status: locationClosureStatus
  };

  const payments = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/payments`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const transactions = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/transactions`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const tickets = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/tickets`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const fees = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/fees`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const refunds = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/refunds`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const items = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/items`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const redeemableItems = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/redeemable-items`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const giftCertificates = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/gift-certificates`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const parcels = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/parcels`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const insurances = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/insurances`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const invoices = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/invoices`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };
  const deposits = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/deposits`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({jwtToken, token, shiftId, deposit, headers}) {
      return client({
        url: `/shifts/${shiftId}/deposits`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: deposit
      });
    }
  };
  const manualTickets = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/manual-tickets`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({jwtToken, token, shiftId, manualTicket, headers}) {
      return client({
        url: `/shifts/${shiftId}/manual-tickets`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: manualTicket
      });
    }
  };
  const startingBalances = {
    create({jwtToken, token, shiftId, startingBalance, headers}) {
      return client({
        url: `/shifts/${shiftId}/starting-balance`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: startingBalance
      });
    }
  };
  const purchaseLimitPayments = {
    get({token, jwtToken, locationId, query, headers}) {
      return client.get(`/shifts/${locationId}/purchase-limit-payments`, {
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
      });
    }
  };
  const salesSummary = {
    get({token, jwtToken, shiftId, query, headers}) {
      return client.get(`/shifts/${shiftId}/sales-summary`, {
        headers: authorizationHeaders({
          token, jwtToken, internalAuthTokenProvider, headers
        }),
        params: query
      });
    }
  };
  const commissions = {
    get({token, jwtToken, shiftId, headers}) {
      return client.get(`/shifts/${shiftId}/commissions`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  const requiresAgencyShiftClosure = {
    put({token, jwtToken, shiftId, headers, shiftData}) {
      return client({
        url: `/shifts/${shiftId}/requires-agency-shift-closure`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {
          shiftData
        }
      });
    }
  };

  return {
    all,
    get,
    create,
    update,
    requiresAgencyShiftClosure,
    payments,
    transactions,
    tickets,
    fees,
    refunds,
    items,
    redeemableItems,
    giftCertificates,
    parcels,
    insurances,
    invoices,
    deposits,
    manualTickets,
    locationClosures,
    startingBalances,
    purchaseLimitPayments,
    salesSummary,
    commissions
  };
}

module.exports = shiftsFactory;
