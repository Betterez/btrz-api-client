const { authorizationHeaders } = require("./../endpoints_helpers");

function filesFactory({ client, internalAuthTokenProvider }) {

  function upload({ token, formData }) {
    // Only required to support integration tests
    const formHeaders = typeof formData.getHeaders === "function" ? formData.getHeaders() : {};

    return client({
      url: "/files",
      method: "post",
      headers: {
        ...authorizationHeaders({token, internalAuthTokenProvider}),
        ...formHeaders
      },
      data: formData
    });
  }

  return {
    upload,
  };
}

module.exports = filesFactory;
