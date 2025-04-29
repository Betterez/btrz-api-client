const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function prismaTerminalsFactory({client, internalAuthTokenProvider}) {
  const reversals = {
    get({token, jwtToken, id, query = {}, headers}) {
      return client.get(`/prisma-terminals/reversals/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({token, jwtToken, id, prismaReversal, query = {}, headers}) {
      return client({
        url: `/prisma-terminals/payments/${id}/reversals`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {prismaReversal}
      });
    },
    delete({token, jwtToken, id, query = {}, headers}) {
      return client({
        url: `/prisma-terminals/reversals/${id}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    },
  };

  const payments = {
    get({token, jwtToken, id, query = {}, headers}) {
      return client.get(`/prisma-terminals/payments/${id}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({token, jwtToken, prismaPayment, query = {}, headers}) {
      return client({
        url: "/prisma-terminals/payments",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query,
        data: {prismaPayment}
      });
    },
    delete({token, jwtToken, id, query = {}, headers}) {
      return client({
        url: `/prisma-terminals/payments/${id}`,
        method: "delete",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        params: query
      });
    },
    reversals
  };

  return {
    payments
  };
}

module.exports = prismaTerminalsFactory;
