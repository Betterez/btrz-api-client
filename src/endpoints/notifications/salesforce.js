const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function salesforceFactory({
  client, internalAuthTokenProvider
}) {
  return {
    sms: {
      create({
        token, jwtToken, smsMsg = {}, headers
      }) {
        return client({
          url: "/salesforce/sms",
          method: "post",
          data: {
            sms: smsMsg
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    }

  };
}

module.exports = salesforceFactory;
