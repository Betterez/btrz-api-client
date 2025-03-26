const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function prismaTerminalsFactory({client, internalAuthTokenProvider}) {
  const reversals = {
    get({token, jwtToken, id, query, headers}) {
      return client.get(`/prisma-terminals/reversals/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({token, jwtToken, id, prismaReversal, headers}) {
      return client({
        url: `/prisma-terminals/payments/${id}/reversals`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {prismaReversal}
      });
    }
  };

  const payments = {
    get({token, jwtToken, id, query, headers}) {
      return client.get(`/prisma-terminals/payments/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({token, jwtToken, prismaPayment, headers}) {
      return client({
        url: "/prisma-terminals/payments",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: {prismaPayment}
      });
    },
    reversals
  };

  return {
    payments
  };
}

module.exports = prismaTerminalsFactory;
