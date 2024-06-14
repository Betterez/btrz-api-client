const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function twilioFactory({
  client, internalAuthTokenProvider
}) {
  return {
    sms: {
      create({
        token, jwtToken, smsMsg = {}, headers
      }) {
        return client({
          url: "/twilio/sms",
          method: "post",
          data: {
            sms: smsMsg
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    },
    whatsapp: {
      create({
        token, jwtToken, whatsappMsg = {}, headers
      }) {
        return client({
          url: "/twilio/whatsapp",
          method: "post",
          data: {
            whatsapp: whatsappMsg
          },
          headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
        });
      }
    }
  };
}

module.exports = twilioFactory;
