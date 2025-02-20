const {
  authorizationHeaders
} = require("../endpoints_helpers");

function prismaTerminalsFactory({client, internalAuthTokenProvider}) {
  const payments = {
    get({token, jwtToken, id, headers}) {
      return client.get(`/prisma-terminals/payments/${id}`, {
        params: {},
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
    }
  };

  return {
    payments
  };
}

module.exports = prismaTerminalsFactory;
